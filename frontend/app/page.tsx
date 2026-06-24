"use client";

import { FormEvent, useMemo, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatResponse = {
  detail?: string;
  reply?: string;
};

const CHAT_API_URL = "http://localhost:8000/api/chat";

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSend = useMemo(
    () => input.trim().length > 0 && !isLoading,
    [input, isLoading],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userMessage = input.trim();
    if (!userMessage || isLoading) {
      return;
    }

    setError(null);
    setInput("");
    setIsLoading(true);

    const nextUserMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: userMessage,
    };

    setMessages((currentMessages) => [...currentMessages, nextUserMessage]);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      let data: ChatResponse | null = null;
      try {
        data = (await response.json()) as ChatResponse;
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error(
          data?.detail ||
            data?.reply ||
            "The coach could not respond. Please try again.",
        );
      }

      if (!data?.reply) {
        throw new Error("The backend returned an empty response.");
      }

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
      };

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
    } catch (caughtError) {
      const errorMessage =
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong while contacting the backend.";

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="page-shell">
      <section className="chat-card" aria-labelledby="chat-heading">
        <div className="chat-header">
          <p className="eyebrow">AI Engineer Challenge</p>
          <h1 id="chat-heading">Supportive Coach Chat</h1>
          <p>
            Send a message to the FastAPI backend and get a supportive response
            from the OpenAI-powered coach.
          </p>
        </div>

        <div className="message-list" aria-live="polite">
          {messages.length === 0 ? (
            <div className="empty-state">
              <p>No messages yet.</p>
              <span>Ask for encouragement, help with a habit, or a quick reset.</span>
            </div>
          ) : (
            messages.map((message) => (
              <article
                className={`message message-${message.role}`}
                key={message.id}
              >
                <span>{message.role === "user" ? "You" : "Coach"}</span>
                <p>{message.content}</p>
              </article>
            ))
          )}

          {isLoading ? (
            <div className="loading-indicator" role="status">
              <span className="spinner" aria-hidden="true" />
              Coach is thinking...
            </div>
          ) : null}
        </div>

        {error ? (
          <p className="error-message" role="alert">
            {error}
          </p>
        ) : null}

        <form className="chat-form" onSubmit={handleSubmit}>
          <label htmlFor="message">Your message</label>
          <div className="input-row">
            <input
              id="message"
              name="message"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="What would you like coaching on?"
              disabled={isLoading}
              autoComplete="off"
            />
            <button type="submit" disabled={!canSend}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
