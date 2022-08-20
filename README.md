FortiMonitor Frontend Software Engineer Hiring
Test
NOTE: This project should be completed prior to starting your HackerRank test - it appears as
the final question on the HackerRank test, but you should just need to upload the final result
when you are in HackerRank. Please read the entire project description in advance (paying
particular attention to the collaboration section below) and allocate sufficient time to complete
the project.
Problem Statement
A core component of our offering is a monitoring agent that the customers install on their
servers (physical, virtual, cloud instances like EC2 and Azure VM, etc.) to collect system and
application metrics from the server. The agent then feeds the results up to our cloud
environment for processing where we analyze the collected metrics to determine if we need to
send out alerts, populate dashboards, etc.
The goal of this task is to build a lightweight frontend app that makes an API call to fetch the
outage data and render the data in a tabular view. This is by no means intended to be a full
production-ready application but more a means to explore design issues and see how you
approach the problem.
Core Requirements
Put together an initial implementation satisfying the following:
• Implemented in Vue, React or Angular (using whichever version you prefer)
• Fetch data via an API Call.
o URL – https://api2.panopta.com/v2/outage?api_key=6369950d-c200-47e5-b943-
06047662e4fa

• Display the API fetched data inside the table in the order they are retrieved. (Do not
worry about the styling). Display following fields
o id (server id or compound service id)
o server name
o description
o start time
o end time
o status
o severity
o has_active_maintenance

Additional Considerations
The following are not required aspects of the solution but are interesting to consider when
working on your design. Feel free to add stubs for features that could eventually be added or
come prepared to discuss potential future extensions when we review your solution.
• Loading state
• Handle API error
• Pagination (Server-side vs Client-side)
Collaborating with FortiMonitor
The goal of this project is equally to give you an opportunity to collaborate with some of the
existing FortiMonitor team members as it is seen what code you produce. You should have
received an invite to a private Slack channel where a number of us will be available to answer
questions, review design ideas and discuss possible solutions with you. If you have any
problems connecting to Slack get in touch with Nick for assistance.
To Submit your Result
Upload a zip file with your code (using whatever file layout you prefer) and a
txt or doc file with thoughts on the additional considerations listed above as the answer to the
final question on the HackerRank test.
