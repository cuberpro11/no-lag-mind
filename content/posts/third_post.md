---
title: "The Perfect AI Prompt Formula: How to Get Exactly What You Want Every Time"
date: 2025-10-22T00:00:00Z
draft: false
---
### Why you should take the time to learn to prompt

When most people are writing a prompt to an LLM they only write a sentence or two. While this is straight forward, it normally leads to generic results that sometimes aren't even helpful. 

The solution to this is to take the time to write a nice prompt that is catered to your certain use case. When writing a good prompt there is a specific structure to follow, which both makes it easer to start writing the prompt and for the LLM to understand what you want. By following the five-part formula you can ensure that you will always get a response from the AI that is useful for your specific use case.

However, it is not always necessary to write a long prompt. Sometimes it is okay to write a one sentence prompt, or sometimes you have to follow a different prompt technique called chain of thought.

By taking the time to write your prompt up front you save yourself the hassle and time to edit the output of the AI or to keep rerunning the prompt until you get something that is useable.

### The five-part formula

The perfect AI prompt has five essential components and each component ties into each other, helping the AI better understand and complete the task. This formula serves as a basic template, however, depending on the task you might need to add another section or decide to remove a section.

1. Persona - who would be the ideal person to complete the task
2. Context - all the relevent information that isn't part of the task
3. Task - in the most clear words what the AI should do
4. Output/Format Style - what the AI should output
5. Negatives - what the AI should make sure to avoid in the response

### 1. Persona: Define the AI's role

Including a persona at the beginning of your prompt significantly benefits an LLM's ability to provide a tailored and effective response. Here's a breakdown of how it works:

*   **Contextualization:** By assigning a persona, you're providing the LLM with crucial contextual information. This helps the model understand the perspective, expertise, or role it should adopt when answering your prompt. Instead of treating your prompt as a general request, the LLM can narrow its focus to the relevant information within its massive database.

*   **Relevance:** The persona acts as a filter, guiding the LLM to prioritize information that aligns with the specified role. For example, if you ask a "medical expert" for advice, the LLM will draw upon its medical knowledge and avoid irrelevant information. This leads to more focused and catered responses.

*   **Tone and Style:** A persona influences the tone and style of the LLM's response. A "poet" will use different language and phrasing compared to a "financial advisor." This allows you to receive responses that are not only informative but also well-suited to the desired communication style.

*   **Efficiency:** By specifying a persona, you help the LLM to skip steps. Instead of needing to infer the context and applicable knowledge, the model can directly focus on the task at hand.

*   **Reduced Ambiguity:** Personas reduce ambiguity by clarifying the purpose and scope of your request. This helps the LLM to avoid misinterpretations and provide responses that precisely match your needs.

In essence, a persona helps an LLM to "become" a specific entity, allowing it to leverage its vast knowledge base more effectively and deliver outputs that are both relevant and tailored to your specific requirements.

Also, making sure to use keywords like:
- `elite`
- `the best`
- `a professional`

Will ensure that the LLM generates responses that are of the highest quality, representing the best in a the class most relevant to the task that you want it to complete.

### 2. Context: Provide everything relevant

This is something that I notice people leave out a lot. They assume the AI knows everything that it needs to in order to do their task. In reality the AI knows a lot, but it doesn't know all the information that would be usefull for your task. This is where context comes in.

This is a list of what to include in the context section:
- Background information
- Constraints and limitations
- Target audience
- Previous work or decisions
- Current situation or problem

Also, remember that the more context the better, because it means the more personalized information the LLM has to figure out how to complete your task. However, if you give it irrelevant context it can confuse the LLM or make it draw information from its database that could contaminate your output with irrelevant information.

### 3. Task: Simply what it should do, as clearly as possible

Now it is time to write the task, which is the whole reason why you are writing the prompt in the first place. By telling the LLM who it should be and filling it in with everything that it needs to know, you have set your self up perfectly to deliver the task.

When writing the task make sure to be very clear and concise, this is because you don't want to state anything that could confuse with the context that AI has or who the AI thinks it should be (which would confuse it and lead to a worse response).

Make sure not to be overly simple or vague because this could leave to much room for the LLM to make wrong assumptions or deliver a generic output. The goal is to have a balance between how much you pre-plan should be in the output and how much you let the AI figure out.

### 4. Output/Format Style: Control the structure and tone

This section is optional and only applies when you have specific formatting or tone requirements. For simple prompts, you can often skip this entirely and let the AI decide what is the best formatting to use based on the previous sections.

When you do need specific output formatting, be clear about response tone and voice (professional, casual, technical, etc.), structure (paragraphs, bullet points, numbered lists), and any formatting requirements (markdown, HTML, plain text). This ensures the AI delivers exactly what you need without requiring additional editing.

### 5. Negatives: Tell the AI what to avoid

This section is also optional and only useful when you've had problems with the AI including unwanted content in similar requests or it is something that is less common and too specific for the AI to know what to exclude. Most of the time, you can skip this entirely.

When you do need to specify negatives, think about what typically goes wrong when you ask for this type of content. What do you usually have to edit out or rephrase? Common things to exclude include irrelevant examples from other industries, unwanted details like historical explanations, specific formats you don't want, or tone restrictions. This acts as a filter, ensuring the AI stays focused on exactly what you need.

### A complete example

**Persona:** You are an elite keyboard ergonomics expert and typing efficiency specialist with 10+ years of experience analyzing keyboard layouts, conducting typing studies, and helping developers optimize their typing performance. You have deep knowledge of finger movement patterns, RSI prevention, and productivity optimization.

**Context:** I'm a software developer who types 8+ hours daily and is experiencing some wrist discomfort. I'm considering switching from QWERTY to a more ergonomic layout but need to understand the trade-offs. My typing speed is currently 100 WPM on QWERTY, and I primarily code in multiple programming languages. I'm willing to invest 2-3 months in retraining if the long-term benefits are significant. I use both Windows and Mac systems.

**Task:** Write a comprehensive comparison between QWERTY, Colemak, and Workman keyboard layouts. Cover typing speed potential, ergonomic benefits, learning curve, programming efficiency, and real-world adoption rates. Include specific data points about finger travel distance, hand alternation, and common programming symbol accessibility.

**Output/Format Style:** Structure the comparison as a detailed analysis with clear sections for each layout, followed by a side-by-side comparison table. Use a professional, data-driven tone with specific metrics and percentages. Include practical recommendations for each layout type. Use markdown formatting with headers, bullet points, and tables for easy reading.

**Negatives:** Don't include historical background about why QWERTY was created or lengthy explanations of layout design principles. Avoid discussing Dvorak or other less common layouts. Don't include personal anecdotes or subjective opinions - focus on objective data and measurable benefits. Don't provide specific key remapping instructions or installation guides.

### Prompt writing: How to use AI to cheat

Sometimes you need a well-structured prompt but don't have the time to craft one from scratch, or the task isn't important enough for it to be worth spending significant effort or time on prompt engineering. In these situations, you can leverage AI itself to help you write better prompts.

There are two effective strategies for this approach:
- First, you can provide the AI with this blog post or briefly explain the five-part formula and ask it to generate a prompt for your specific use case.
- Second, you can take an existing prompt you've written and ask the AI to evaluate it on a scale of 1 to 10, then ask it to use its feedback to improve the prompt.

Both methods allow you to quickly generate high-quality prompts by using the LLM's understanding of effective prompt structure, saving you time while still ensuring you get the detailed, tailored responses you need.

### Ending

Thanks for reading and happy prompting!