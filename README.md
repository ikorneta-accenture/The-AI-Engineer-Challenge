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
<!-- Add your app's response here -->
(As no paragraph has been provided, this question has been omitted.)
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
<!-- Add your app's response here -->
(As no paragraph has been provided, this question has been omitted.)
---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
<!-- Write your answer here -->
Yes.
---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
<!-- Write your answer here -->

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

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
<!-- Write your answer here -->

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
