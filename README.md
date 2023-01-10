# Context API

![UML]('./src/assets/UML.png')
[UML]('./src/assets/UML.png')

**To Do List Manager Phase 1:** Incorporate configuration settings to the application.

Currently, a user can add todo tasks to the proof-of-life starter application. In this phase, we will add hard-wired, default context settings to the application so that the user can view three incomplete todo tasks.  In addition, the user will have the option of viewing any additional incomplete tasks by using pagination functionality.

## Phase 1 Requirements

In Phase 1, we're going to perform some refactoring of a ToDo application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.

- Create a Detailed UML.
- Properly modularize the application into separate components, note the **proposed** file structure below.
- Implement the Context API to make some basic application settings available to components.
  - Show three items by default.
  - Hide completed items by default.
  - Add the sort word 'difficulty' by default.
- Style the application using the [Mantine Component API](https://mantine.dev/pages/getting-started/){target:_blank}.
  - NOTE: The expectation to style this entire component in one day is likely unrealistic.  The recommendation is to implement the required functionality, then systematically begin styling with Mantine.  Match the comp image(s) as closely as possible. 80% of the design work will likely take 20% of your time. By the end of the week, being mostly there with style is the goal!
