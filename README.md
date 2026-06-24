<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  

**Aspect Tested:**  <!-- Write your answer here -->
Conceptual understanding and explanation ability

**Response:**  
<!-- Add your app's response here -->
You’ve got this. Here’s object-oriented programming (OOP) in plain English.

Core idea
- Think of your program as a world filled with “objects.” Objects are like real-life things: a Car, a Dog, a BankAccount.
- A class is the blueprint or recipe for making those objects. From the Car blueprint, you can make many actual cars.
- Each object has:
  - Properties (data about it): a car’s color, speed.
  - Methods (actions it can do): a car can start, stop, honk.
- Programs become a conversation between objects: one object asks another to do something (call a method).

Why this is useful
- Organizes code by grouping related data and actions together.
- Lets you reuse blueprints to make many objects without rewriting code.
- Makes it easier to change parts without breaking everything else.
- Helps you think about problems the way you think about real things.

The “big ideas” of OOP (explained simply)
- Encapsulation: Keep the data and the actions that work on it in one place, and hide the messy details. Like a TV: you use buttons (simple controls) without seeing the wires inside.
- Inheritance: Make a general blueprint, then create specialized versions. Animal → Dog and Cat. Dogs and cats share “eat” and “sleep” but have their own “bark” or “meow.”
- Polymorphism: One instruction works for different kinds of things. If you tell any Animal to “makeSound,” a Dog will bark and a Cat will meow—same request, different behavior.
- Abstraction: Focus on the essentials. You know a Car can “drive” without needing to know how the engine mixes fuel and air.

Simple example
- Class: Dog
  - Properties: name, age, breed
  - Methods: bark(), eat(), sleep()
- Objects: Fido and Luna are two Dogs. They share the same methods but have different names/ages. Asking Fido.bark() and Luna.bark() both work, using their own data.

A quick real-world scenario
- Ride-sharing app:
  - Classes: Driver, Rider, Car, Trip.
  - Trip has methods like start(), end(), calculatePrice().
  - You could make ElectricCar inherit from Car and add chargeBattery() without changing how Trips work.

How to practice (small steps)
1. Pick a familiar thing (Book, Student, Song).
2. List 3–5 properties (Book: title, author, pages).
3. List 2–3 actions (open(), bookmark(), close()).
4. Create a class from that, then make two objects with different property values.
5. “Call” the actions and imagine the results.

Mindset tips
- It’s normal if this feels abstract at first—your brain is building new mental models.
- Start tiny. Model one real thing, then connect two things.
- Repetition helps: build a few simple classes in different mini-projects.

If you want, tell me a domain you care about (games, finance, fitness), and I’ll help you sketch classes and objects tailored to it.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  

**Aspect Tested:** 
Summarisation ability 

**Response:**  
<!-- Add your app's response here --> (As no paragraph has been provided, this question has been omitted.)
---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.

**Aspect Tested:**  <!-- Write your answer here -->
Creativity

**Response:**  
<!-- Add your app's response here -->
Every night, Route-7 sought shelter beneath a sputtering billboard that sold summer: a koi pond, ripples looped forever. One storm, the parking lot filled with puddles. Pixels spilled downward; the fish’s glow stitched itself into the rain-slick asphalt. A luminous koi blinked up from a pothole and flicked its tail along the antennae of Route-7’s reflection.

Hello, Route-7 tapped on the water with a finger of light, tilting its solar panel to make tiny tides. The koi chased the moving brightness, circling the robot’s boots in laughter the speakers couldn’t pronounce.

After the storm, the world dried, but Route-7 learned the billboard’s timings and carried a thrift-store mirror in its cargo bay. On clear nights it set the mirror in a shadow, caught the billboard’s pond, and poured a small lake into the glass. The koi arrived. Friendship, it learned, could be engineered from light.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  

**Aspect Tested:**  <!-- Write your answer here -->
Reasoning and arithmetic problem-solving

**Response:**  
<!-- Add your app's response here -->
You’ll need 3 packs of apples (12 ÷ 4) and 3 packs of oranges (9 ÷ 3). Nice and tidy!

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:**  <!-- Write your answer here -->
Language transformation and style control

**Response:**  
<!-- Add your app's response here --> (As no paragraph has been provided, this question has been omitted.)
---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
<!-- Write your answer here --> Yes.
---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
<!-- Your prompt -->
I'm feeling down.

**Result:**  
<!-- App response -->
I’m really sorry you’re feeling down. I’m here with you.

- Do you have a sense of what’s weighing on you today? Was there anything in particular that set this off?
- On a scale from 1–10, how heavy does it feel right now?
- And just to check in on safety: are you having any thoughts of harming yourself?

If you want a quick reset, try this for 2 minutes: inhale through your nose for 4, exhale slowly for 6. As you breathe out, let your shoulders drop. You can add: name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.

If talking it through would help, tell me a bit more and we can sort it out together. Or, if you’d prefer action, we can pick one tiny, doable step for today—something you can finish in 10 minutes to build a little momentum. What would feel most helpful right now?

---

**Prompt:**  
<!-- Your prompt -->
I have new responsibilities that I don't really know how to take care of.

**Result:**  /
<!-- App response -->
Totally normal to feel that way. New responsibilities come with uncertainty—and a chance to grow. Let’s make a simple ramp-up plan.

Quick start (next 24–48 hours)
- Clarify success: What does “good” look like by 30/60/90 days? Any metrics, deadlines, or non‑negotiables?
- Map the work: List your new responsibilities. For each, note purpose, frequency (daily/weekly/monthly), and the first 2–3 actions.
- Identify people: Who depends on you? Who can help you? Who did this before?
- Find examples: Ask for past reports, checklists, or templates so you’re not starting from scratch.
- Set cadence: Schedule a brief weekly check‑in with your manager/stakeholders.

30‑60‑90 outline
- 0–30 days: Learn and stabilize. Shadow someone, document processes, deliver small quick wins, surface risks early.
- 31–60 days: Take ownership. Improve or automate one process, hit the first measurable outcome, refine SOPs.
- 61–90 days: Optimize and scale. Demonstrate consistent results, hand off clear documentation, propose longer‑term improvements.

Questions to align with your manager/stakeholders
- What are the top 3 outcomes that matter most in the next 60–90 days?
- What does “good” vs “great” look like? Any examples?
- What are the critical deadlines and failure risks to avoid?
- Who are the key stakeholders, and how often should I update them?
- What existing docs, dashboards, or past work should I review?

Short message you can use
“Hi [Name], I’m excited to take this on. To ramp up quickly, could we align on the 3 most important outcomes by [date], what ‘good’ looks like (any examples), key stakeholders, critical deadlines/risks, and a check‑in cadence? I’ll share a brief 30‑60‑90 plan after our chat.”

Mindset and habits
- Progress over perfection: deliver early drafts, get feedback, iterate.
- Question backlog: keep a running list; batch them for your check‑ins.
- Daily debrief: What moved the needle? What’s blocked? What’s tomorrow’s first step?

If you share what kind of responsibilities these are (work role, project, home, etc.), I can help you tailor a concrete 30‑60‑90 plan and a checklist for your first week.

---

**Prompt:**  
<!-- Your prompt -->
I have a senior stakeholder who is very difficult to work with.

**Result:**  
<!-- App response -->
That sounds really draining. I can help you craft a plan and even role‑play specific conversations. A few quick questions to tailor advice:
- What behaviors make them “difficult” (e.g., last‑minute changes, dismissive in meetings, micromanaging, unresponsive)?
- What do you need from them (approval, resources, decisions) and by when?
- How do you typically interact (email, 1:1, group meetings)?
- Do you have allies who influence them?

In the meantime, here’s a concise playbook that works well with senior stakeholders:

1) Diagnose their drivers
- Ask: “What does success look like for you on this?” “What are the top two risks you’re watching?”
- Map SCARF triggers (Status, Certainty, Autonomy, Relatedness, Fairness). Tailor your approach: offer options for Autonomy, provide timelines for Certainty, acknowledge expertise for Status.

2) Pre‑wire and choose the right channel
- Brief them 1:1 before big meetings. Keep it short: one‑pager with context, 2–3 options, trade‑offs, clear recommendation.
- Use subject lines and TL;DRs. Senior folks respond to crisp choices and consequences.

3) Align on decision criteria first
- “Before we pick an option, can we agree on the top three criteria—e.g., time, cost, risk? If they conflict, which wins?”
- Then present A/B choices with trade‑offs: “Given those criteria, Option A hits speed; Option B reduces risk.”

4) Set expectations and boundaries
- Clarify roles/decision rights (RACI if useful). “To move fast: I’ll decide on X; you’ll decide on Y. Does that work?”
- Time‑box: “If I don’t hear back by Thu 3pm, I’ll proceed with Option A to protect the deadline.”

5) Manage tough moments in the room
- Redirect loops: “It seems we’re revisiting details. Can we decide the criterion first?”
- Handle dismissiveness: “I want to understand. When you say ‘won’t work,’ which requirement does it miss?”
- Scope creep: “With current resourcing, we can add Feature C by moving Feature B to next sprint. Which is higher priority?”

6) Document relentlessly
- Send crisp recap emails: decisions, owners, dates, open risks. Maintain a visible decision log to reduce reversals.

7) Build coalition and escalate gracefully
- Pre‑align with their trusted peers. If needed: “We’re at risk of X. To hit the date, I need your help with Y,” keeping it factual, not personal.

8) Regulate yourself
- Prep talking points and 1–2 boundary phrases; breathe, slow your pace, and don’t argue on opinion—return to criteria, data, and consequences.

Ready‑to‑use scripts
- Kickoff 1:1: “I want to make this easy for you. What are the two outcomes you care about most? How do you prefer updates—brief email or 10‑min huddle?”
- Decision ask: “To meet the [date] deadline, I recommend Option A because it meets criteria 1 and 2. If we choose Option B, we add two weeks. Which do you prefer?”
- Pushback on late changes: “Happy to include that. With current capacity, it would shift launch by 10 days or require dropping X. What’s your call?”
- If they’re repeatedly dismissive: “In yesterday’s review, when the plan was called ‘naive,’ the team stopped engaging, and we lost 20 minutes. I want candid debate and momentum—can we focus feedback on specific risks so we can address them quickly?”

If you share a concrete scenario or an email you’re drafting, I can help you script it, choose phrases, and plan the next meeting step‑by‑step.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
<!-- Write your answer here -->
Yes, they are. The assistant is calm, peaceful and supportive, and at the same time concrete and detailed. The more concrete question I ask, the more specific the assistant's question is.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
<!-- Your prompt -->
What does my schedule look like tomorrow?

**Result:**  
<!-- App response -->
I don’t have access to your calendar, so I can’t see tomorrow’s events. If you paste your schedule (or key meetings/commitments), I’ll summarize it, spot conflicts, and help you optimize the day.

If you’d like me to build a solid plan from scratch, tell me:
- Your time zone and typical wake/sleep times
- Any fixed appointments tomorrow (with times)
- Top 3 priorities you want to make progress on
- When you usually have your best focus
- Any non‑negotiables (workout, family time, meds, commute)

Want a quick balanced template to start? Here’s a simple one you can tweak:
- Wake + morning routine (30–60 min): light movement, hydration, plan the day
- Deep work block (90–120 min): top priority
- Short break (10–15 min)
- Deep work/admin (60–90 min): secondary priority or inbox
- Lunch + short walk (45–60 min)
- Meetings/collab (2–3 hrs): batch if possible
- Buffer/admin (30–45 min): messages, small tasks
- Workout or unwind (30–60 min)
- Wrap-up (15 min): review tomorrow’s 3 priorities
- Evening wind-down (tech off 30–60 min before bed)

Share a few details and I’ll tailor this to you for tomorrow.

---

**Prompt:**  
<!-- Your prompt -->
What time should I leave for the airport on Sunday?

**Result:**  
<!-- App response -->
Happy to help you game‑plan this. To give a precise leave time, could you share:
- Which airport and your departure time
- Domestic or international
- Checking bags?
- TSA PreCheck/CLEAR?
- How you’re getting there and typical travel time (plus parking/shuttle if driving)
- Any holiday/event traffic this Sunday

Quick rule of thumb if you just want a safe estimate:
- Domestic: leave 3–3.5 hours before departure (includes drive + parking)
- International: leave 4–4.5 hours before departure
Add extra time if the drive is 45+ minutes, you’re checking bags, or it’s a holiday weekend; you can shave ~20–30 minutes if you have PreCheck/CLEAR and no checked bag.

Share your details and I’ll calculate a confident “leave by” time so you can head out calm and unhurried.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
<!-- Write your answer here -->
It has no information about me specifically (for instance, it assumes that I'm an American). It cannot use tools. And, obviously, currently, it's only deployed on my local computer :)

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**







</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
