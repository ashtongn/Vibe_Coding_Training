import type { CourseManifest } from '../types/course';

export const courseManifest: CourseManifest = {
  id: 'vibe-coding-bootcamp',
  title: 'Vibe Coding Bootcamp',
  subtitle: 'Ship with agents, not chaos',
  description:
    'A practical course for designing, reviewing, and shipping AI-assisted software work with clarity.',
  modules: [
    {
      id: 'foundations',
      title: 'Foundations',
      description:
        'Set the mental model for effective AI-assisted development work.',
      lessons: [
        { 
          //#region AI-Augmented Development
          id: 'AI-Augmented Development',
          title: 'AI-Augmented Development',
          type: 'markdown',
          description:
            'An overview of An overview of what AI-augmented development is and why we use it.',
          content: `# Why do we use Coding Tools?
There are many tools out there nowadays that developers and even novice code enthusiasts can use to create apps and tools that would have otherwise taken weeks or months to create. The application of these tools should not completely replace your ability to code, rather be used to create projects that aren't prioritized by your team or unit while also prioritizing your main work first. The idea is to essentially code what must be coded by yourself for security reasons, then create other projects that are either learning experiences, or can instead be of use to you as a developer or engineer. 

In this training we will demonstrate how to make an app using these coding tools(Gemini for the purpose of free availability). This training will also show you the capability and possibilities that exist when you decide to dive into the world of “Vibe Coding.” 

# When to Refrain From Using AI

In an Air Force environment, AI-assisted coding should not be used for classified or controlled unclassified information (CUI), or mission-critical systems where errors or data exposure could impact operations. Airmen must avoid relying on AI for code involving weapons systems, communications security (COMSEC), RF operations, or cyber defense without proper authorization and thorough human validation. AI-generated code should never be accepted without review, especially in safety- or mission-critical contexts, as it may introduce vulnerabilities or incorrect logic. While AI is a valuable tool for unclassified development and rapid prototyping, it does not replace accountability, secure coding practices, or the responsibility to protect national security systems.

# Let's Get Started

Now that the disclaimer is out of the way, let’s get into the possibilities of using AI-augmented development. During this training, we will dive deep into the capabilities, options of AI models, context windows, how to create a repo, and finally a project for you to create, demonstrating understanding of the topic and hopefully interest in what current AI technology has to offer.
## 
`,
        },
        // #region The possibilities are Endless
        {
          id: 'possibilites',
          title: 'The Possibilites are Endless',
          type: 'video',
          description:
            'A short video of the possibilities that exist when using AI-augmented development',
          youtubeId: 'rXvU7bPJ8n4',
        },
        // #region Model Ecosystem
        {
          id: 'model-ecosystem',
          title: 'Model Ecosystem',
          type: 'markdown',
          description:
            'A set of practical habits for turning prototype momentum into repeatable delivery.',
          content: `# Model Ecosystem

Not all LLMs are built the same. Each model is optimized for different tasks such as speed, reasoning, coding, or long-context understanding. Effective developers choose the right tool based on the task, not just preference.

## Google Gemini

- Strong multimodal capabilities (PDFs, images, video)
- Handles large context well
- Best for: document analysis, research, mixed-media workflows

## OpenAI GPT Models

- High-quality code generation and instruction following
- Strong UI/frontend output
- Best for: building apps, debugging, structured development

## Claude (Anthropic)

- High-quality code generation and instruction following
- Strong UI/frontend output
- Best for: high-level reasoning, debugging, structured development

## Open-Weight / Local Models (e.g., LLaMA)

- Can run locally or in controlled environments
- More customizable, but typically less powerful
- Best for: secure/offline use cases


A learner can confidently select the appropriate model based on task requirements, balancing speed, capability, and environment constraints.
`
,
// #region Understanding Context Windows
        },
        {
          id: 'context-windows',
          title: 'Understanding Context Windows',
          type: 'markdown',
          description:
            'A context window is the amount of information an AI model can “remember” during a conversation or coding session.',
          content: `# Think of it like a temporary working memory.

#### Everything you type, upload, or ask the model to reference gets placed into this memory window:

- your prompts,
- previous responses,
- code,
- logs,
- documentation,
- architecture notes,
- and instructions.

#### Once the context window becomes too full, the model begins to:

- forget older information,
- compress details,
- lose consistency,
- or make incorrect assumptions.

## Simple Analogy

Imagine trying to write software while only being allowed to keep a few pages of notes visible on your desk.

#### As new papers get added:

- older papers fall off the desk,
- important details disappear,
- and eventually you forget earlier decisions.

##### That is essentially how context windows work.

## Why Context Windows Matter

#### Most beginners assume:

“The AI remembers everything.”

It does not.

##### This misunderstanding is one of the biggest reasons people experience:

- random code rewrites,
- broken functionality,
- inconsistent UI,
- duplicated logic,
- forgotten requirements,
- and unstable projects.

Understanding context management is what separates casual AI users from effective AI-assisted developers.

## What Happens When Context Fills Up?

#### As conversations grow larger, models may begin to:

- forget earlier instructions,
- ignore constraints,
- rewrite working systems,
- hallucinate architecture,
- or lose awareness of project structure.

## Common examples:

### Example 1 — Forgotten Requirements

#### You originally told the model:

“Do not modify authentication.”

#### Later in the conversation:

the AI rewrites your auth flow anyway,
because the earlier instruction is no longer strongly represented in context.

### Example 2 — UI Drift

You spent an hour refining your frontend style.

#### After many prompts:

- the AI suddenly changes colors,
- spacing,
- layout,
- or component structure.

#### Why?

The earlier UI decisions became diluted in context.

## Example 3 — Broken Architecture

#### You previously established:

- frontend folder structure,
- API routes,
- database schema,
- naming conventions.

#### Later:

- the AI creates conflicting files,
- duplicate logic,
- or inconsistent APIs.

The model lost architectural awareness.

## Larger Context Windows Are Not Infinite

Some modern models support very large context windows.

#### However:

- larger context does NOT guarantee perfect memory,
- and larger prompts can sometimes reduce response quality.

More information is not always better.

#### Too much unnecessary context can:

- distract the model,
- increase hallucinations,
- reduce precision,
- and slow reasoning.

## Practical Context Management Techniques
### 1. Keep Tasks Focused

#### Bad:

“Rewrite my whole application.”

#### Good:

“Only refactor the navbar component. Do not modify authentication or backend logic.”

#### Smaller scoped requests produce:

- more stable outputs,
- fewer regressions,
- and more predictable behavior.

### 2. Re-State Important Constraints

Do not assume the model remembers earlier rules.

Reinforce critical information often.

#### Example:

“Continue using React, TypeScript, and Tailwind. Preserve existing authentication flow.”

This refreshes important context.

### 3. Use Architecture Documents

#### As projects grow:

conversations become unreliable as the sole memory source.

##### Create project documents such as:

- README files,
- architecture notes,
- API contracts,
- folder structure references,
- coding standards,
- feature requirements.

Then provide those documents back into context when needed.

This dramatically improves consistency.

### 4. Break Large Problems Into Smaller Pieces

Do not build entire systems in one prompt.

#### Instead:

- Plan architecture
- Build frontend
- Build backend
- Add database
- Add authentication
- Add testing
- Deploy

##### This mirrors how real software engineering works.

### 5. Start New Conversations When Necessary

Sometimes context becomes polluted or unstable.

#### Symptoms include:

- repeated mistakes,
- ignoring instructions,
- random rewrites,
- degraded code quality.

#### At that point:

- summarize the project,
- create fresh context,
- and start a new conversation.

##### This often improves results immediately.

## Context Poisoning

Poor prompts can damage future outputs.

##### Examples:

- contradictory instructions,
- unclear architecture,
- excessive pasted code,
- irrelevant logs,
- random experimentation.

This creates “context poisoning,” where the model struggles to determine what actually matters.

##### Good prompting is partially:

controlling signal-to-noise ratio.

## The Most Important Rule

AI models are not independent engineers.

They are context-dependent reasoning systems.

The quality of their output depends heavily on:

the quality of the context,
the clarity of instructions,
and the structure of the information provided.
`
,
// #region AI Limitations & Hallucinations
        },
        {
          id: 'AI-limitations',
          title: 'AI Limitations & Hallucinations',
          type: 'markdown',
          description:
            'AI Is Not an All-Knowing System',
          content: `# What is a Hallucination?

#### A Hallucination occurs when an AI generates:
- false information,
- fake functionality,
- incorrect code,
- nonexistent APIs,
- or fabricated explanations,
- while presenting them as valid.

The model is not intentionally lying.

It is attempting to generate the most statistically likely response.    

### Common Hallucinations in Development
### 1. Fake APIs or Functions

The model may invent:

-methods,
-libraries,
-parameters,
-or framework features that do not exist.

#### Example:

\`\`\`ts
database.autoSecureConnect()
\`\`\`

This function may look legitimate but be entirely fabricated.

#### Always verify:

- official documentation,
- imports,
- and framework references.

### 2. Incorrect Library usage

#### AI may:

- mix framework versions,
- use deprecated syntax,
- or combine incompatible technologies.

#### Example:

- old React patterns inside modern Next.js,
- outdated Firebase syntax,
- invalid Tailwind classes.

Generated code may appear correct while failing in production.

### 3. Logical Errors

#### Code may:

- compile successfully,
- but fail logically.

#### Examples:

- incorrect authentication flow,
- broken validation,
- race conditions,
- insecure API handling,
- flawed calculations.

Passing code is not always correct code.

### 4. False Explanations

#### AI can confidently explain:

- incorrect concepts,
- nonexistent behaviors,
- or invalid technical assumptions.

Confidence does not equal accuracy.

Always validate important technical claims.

## AI Has Knowledge Limitations

#### Models may have:

- outdated training data,
- incomplete framework knowledge,
- or missing awareness of recent releases.

#### This is especially important in:

- rapidly changing libraries,
- security tooling,
- cloud platforms,
- and AI frameworks themselves.

## The Human Developer Remains Responsible

##### AI assists development.

##### It does not replace:

- engineering judgment,
- testing,
- debugging,
- architecture decisions,
- or security review.

You are still responsible for:

- validating outputs,
- testing functionality,
- and ensuring safe deployment.

## Best Practices for Reducing Hallucinations
### Be Specific

Clear prompts reduce ambiguity.

##### Bad:

“Fix my backend.”

##### Good:

“Fix the Express route returning a 500 error when inserting users into PostgreSQL.”

### Provide Context

##### Include:

- errors,
- logs,
- framework versions,
- expected behavior,
- and relevant code.

Better context improves reliability.

### Build Incrementally

Large AI-generated rewrites create higher risk.

##### Smaller scoped changes:

- are easier to validate,
- easier to debug,
- and less likely to introduce hidden failures.
`
,
// #region Development Workflow with AI
        },
        {
          id: 'dev-workflow',
          title: 'Development Workflow with AI',
          type: 'markdown',
          description:
            'AI Should Support Your Workflow, Not Replace It',
          content: `# AI Should Support Your Workflow, Not Replace It

One of the biggest mistakes beginners make is treating AI like a magic “build my app” button. Effective AI-assisted development still follows a structured engineering process. The difference is that AI accelerates each phase.

##### A strong workflow usually follows this sequence:

\`\`\`ts
Plan → Architect → Build → Verify → Refactor → Deploy
\`\`\`

Following this structure keeps projects organized, reduces hallucinations, and makes debugging significantly easier.

### 1. Plan Before You Prompt

##### Before generating code, define:

- what the application does,
- who it is for,
- and what features are actually required.

Many AI-generated projects fail because the developer starts coding before defining scope.

##### A good first step is asking the model to help create:

- an MVP feature list,
- user flow,
- or implementation roadmap.

The goal is clarity before generation.

### 2. Architect the Project

Once the idea is clear, establish the project structure before building features.

##### Define:

- frontend framework,
- backend structure,
- database choice,
- authentication approach,
- and folder organization.

##### Without architecture, AI often creates:

- duplicated logic,
- inconsistent file structures,
- and unstable scaling.

Even simple projects benefit from a short architecture plan.

### 3. Build Incrementally

Do not generate entire applications in one request.

##### Instead, build in layers:

- basic UI,
- then backend routes,
- then database integration,
- then authentication,
- then polish.

Smaller scoped tasks produce more reliable outputs and are easier to debug when something breaks.

AI performs best when solving focused problems.

### 4. Verify Everything

Generated code should never be assumed correct simply because it looks professional.

##### Always:

- run the code,
- test functionality,
- inspect errors,
- and validate logic manually.

AI can generate convincing but flawed implementations. Verification is still the developer’s responsibility.

### 5. Refactor As the Project Grows

Early AI-generated code is often functional but messy.

##### As projects expand:

- simplify components,
- separate responsibilities,
- improve naming,
- and remove duplicate logic.

AI is extremely useful for refactoring when given clear constraints.

Good software is usually rewritten and cleaned multiple times before deployment.

### 6. Deploy and Iterate

Once the application works locally, move it into a deployable environment.

##### Deployment exposes:

- environment issues,
- missing variables,
- dependency problems,
- and production-only bugs.

This is a normal part of development.

AI can assist with deployment configuration, but debugging real systems still requires human oversight and testing.

## Most Important Principle

The best AI-assisted developers are not the ones generating the most code.

##### They are the ones who:

- structure projects clearly,
- guide the AI intentionally,
- verify outputs carefully,
- and iterate systematically.

AI accelerates development, but organization and engineering discipline still determine project quality.
`,

        },
        {
          id: 'capstone-1',
          title: 'Capstone Part 1',
          type: 'markdown',
          description:
            'Introduction to capstone project',
          content: `# Your First AI-Assisted Project

#### You have now learned:

- what AI-assisted development is,
- how models differ,
- how context windows affect outputs,
- and why AI-generated code must still be reviewed carefully.

Now it is time to begin planning your own project.

This project will evolve throughout the remainder of the course. Each future module will help you improve, expand, and refine it using AI-assisted development workflows.

The goal is not perfection.

The goal is learning how to structure ideas, communicate with AI effectively, and iteratively build software with intention.

## Choosing a Project

### Choose Something Small and Useful

Your first project should solve a simple problem and be something you find value in using.

#### Project Choices

##### 1. Productivity Dashboard
##### 2. Fitness Tracker
##### 3. Study/Notes App

The best projects are often tools you would actually use yourself and for the sake of simplicity, please choose an project from the options above.

## 1. Define the Purpose

### What problem does your application solve?

Example: "Helps users organize tasks to view daily progress"

## 2. Identify Core Features

Limit yourself to 3-5 core features.

## 3. Prioritize Features 

Which feature is most important? Which features could be added later?

##4 Define the User Experience

#### What should the user see first when opening the app?




`,
        },
      ],
    },
    {
      id: 'prompting',
      title: 'Prompt-Engineering',
      description:
        'Teach learners how to communicate with coding models effectively.',
      lessons: [
        // #region Anatomy of a good prompt
        {
          id: 'prompt-anatomy',
          title: 'Anatomy of a Good Prompt',
          type: 'markdown',
          description:
            'Understanding the make-up of what good and bad prompt look like, and why we aim to master prompt engineering.',
          content: `# Why Prompt Quality Matters

AI-generated output is heavily influenced by the quality of the instructions it receives.

##### Vague prompts often produce:

- inconsistent code,
- missing functionality,
- poor architecture,
- or outputs that do not match the original goal.

Good prompts reduce ambiguity and guide the model toward a specific result.

The goal of prompt engineering is not to sound “smart.”
The goal is to communicate clearly.

## A Good Prompt Gives Direction

##### Effective prompts usually define:

- the objective,
- the technology being used,
- important constraints,
- and the expected outcome.

The more clearly the task is defined, the more reliable the output becomes.

## The Core Components of a Strong Prompt
### 1. Objective

Clearly explain what you want the AI to accomplish.

##### Bad:

“Make a website.”

##### Good:

“Create a responsive landing page for a fitness app.”

The model performs better when the goal is specific.

### 2. Technology Stack

Specify the tools and frameworks you want used.

##### Example:

“Use React, TypeScript, and Tailwind CSS.”

##### Without this information, the AI may:

- choose the wrong framework,
- mix technologies,
- or generate incompatible code.

### 3. Constraints

Constraints tell the model what it should avoid changing or modifying.

##### Example:

- “Do not modify authentication logic.”
- “Only update the navbar component.”
- “Preserve the current styling.”

Constraints are extremely important during larger projects because they reduce unintended rewrites.

### 4. Expected Output

Explain what kind of result you want returned.

##### Examples:

- full component,
- API route,
- step-by-step explanation,
- refactor,
- debugging assistance,
- or architectural plan.

##### Example:

“Return only the updated React component.”

This helps reduce unnecessary output and keeps responses focused.

## Example of a Weak Prompt

“Build me a dashboard.”

#### Problems:

- no framework specified,
- no feature requirements,
- no styling direction,
- no scope,
- no expected output.

The AI must guess what you want.

## Example of a Strong Prompt

“Create a responsive admin dashboard using React and Tailwind CSS. Include a sidebar, analytics cards, and a recent activity table. Keep the styling minimal and modern. Return the code as a single component.”

##### This prompt:

- defines the objective,
- specifies technologies,
- establishes design direction,
- and clarifies the expected output.

## Prompting Is Iterative

You do not need a perfect prompt immediately.

Most real AI-assisted development involves:

- generating an initial result,
- reviewing output,
- refining instructions,
- and improving incrementally.

Good developers guide the model step-by-step rather than expecting perfect results in one generation.

A tactic that many developers use is to open up a chat bot of some kind and give your vision and what's trying to be accomplished to that chat. This essentially translates for you and create a clearer, more precise prompt for your AI-coding agent.
`,
        },
        // #region Prompting for Code Generation
        {
          id: 'prompting-for-code-generation',
          title: 'Promting for Code Generation',
          type: 'markdown',
          description:
            'Diving into the specifics of clarifying constraints and goals to your chosen AI agent.',
          content: `# Prompting for Code Generation

## AI Works Best with Clearly Scoped Tasks

One of the most effective uses of AI in software development is generating code for specific problems.

However, successful code generation depends heavily on scope and clarity.

##### Beginners often make the mistake of asking the model to:

“Build the entire app.”

##### This usually leads to:

- unstable architecture,
- inconsistent code,
- hallucinated functionality,
- and difficult debugging.

AI performs significantly better when generating smaller, focused pieces of a project.

## Start Small

Instead of generating everything at once, break projects into individual tasks.

##### Examples:

- create a login form,
- generate an API route,
- build a database schema,
- create a navigation bar,
- or write a utility function.

##### Smaller requests:

Produce more reliable outputs,
reduce hallucinations,
and make debugging easier.

## Define the Stack Clearly

Always specify the technologies being used.

##### Example:

“Create a responsive login form using React, TypeScript, and Tailwind CSS.”

##### Without a defined stack, the model may:

- use incorrect syntax,
- mix frameworks,
- or generate incompatible code.

Technology clarity improves consistency across the project.

## Provide Context When Needed

##### The model performs better when it understands:

- the purpose of the component,
- existing architecture,
- expected behavior,
- and how the generated code fits into the larger system.

##### Example:

“This component will be used inside a Next.js dashboard page and should match a minimal dark theme.”

Context helps the AI align generated code with the rest of the application.

## Specify Constraints

Constraints prevent unintended changes and keep outputs focused.

##### Examples:

- “Only modify the frontend component.”
- “Do not change authentication logic.”
- “Preserve the existing API structure.”

This becomes increasingly important as projects grow larger.

## Ask for Specific Outputs

Tell the AI exactly what kind of result you want.

##### Examples:

- complete component,
- single function,
- API route,
- schema definition,
- refactor,
- or explanation.

##### Example:

“Return only the updated Express route.”

Focused outputs reduce unnecessary code generation.

## Example of a  Strong Prompt

“Create a React chat interface using Tailwind CSS. Include a sidebar with conversations, a message area, and an input field. Use placeholder data only and return the code as a single component.”

This prompt:

- defines the objective,
- limits scope,
- specifies technologies,
- and clarifies expectations.

## Generate in Layers

Effective AI-assisted development usually follows this sequence:

1. generate structure,
2. add functionality,
3. connect backend services,
4. refine UI,
5. optimize and refactor.

Trying to generate everything simultaneously often produces unstable results.

Layered development improves maintainability and debugging.

## Review Before Accepting

AI-generated code should always be reviews, tested, and understoof before integration.

Even when the code appears correct, the model may introduce insufficient logic and other bugs/security issues.

If you're programming a tool for an operator in the field to use, remember that the efficiency and speed in which the code is ran can be the difference between life and death for someone. 

Always exercise caution and remember that generated code is the starting point, not guaranteed production-ready software.
`,
        },
        {
          id: 'production-habits',
          title: 'Production Habits',
          type: 'markdown',
          description:
            'A set of practical habits for turning prototype momentum into repeatable delivery.',
          content: `# 
`,
        },
      ],
    },
  ],
};
