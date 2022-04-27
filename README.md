# EnSpeak

TODO -- Idea to work on in the future. 

Preparation system for the CAE speaking exams (customizable for any other language exam including speaking test). 

Brief introduction to the functionality:
Everyone would be allowed to register with their google account or create an account on the website. Those who want to practice could create an offer of meeting for anyone who would like to practice speaking test with them. Anyone would be then able to make a reservation for that meeting.

When the time comes, these two people are going to join the room, which would resemble a Zoom room. The difference is that a bot examiner in the form of an automatic system would be present. It would moderate the entire session the same way the examiner does. Tham means dividing the test into parts by playing pre-recorded messages and making sure that candidates do not exceed the time limit. A friendly zoom-like interface + some more features would be provided.

The next part would be to build a system for giving the feedback to the candidates. If the candidates would like to get the feedback, they would consent to make a video recording of their session which would be available for anyone to see (or only specified users - that would be up to the candidates). Everyone else would then in some user-friendly form be able to write the feedback, which the candidates could then use to improve their speaking skills.

The validity of the feedback could be verified by being able to rate the feedback given to the session. Reward and punishment system based on the feedback rating would then motivate the people to give elaborate and useful feedback instead of just "trolling it". By getting upvotes on the feedback, people would be able e.g. to reserve sessions, get access to more practice tests, etc. This system works for instance in the biggest programming forum - stackoverflow.com.

No analysis whether this community based grading approach would work has been made. If it proved ineffective, commercial variant where only paid tutors would grade would be an alternative. Some AI features could be added in order reduce the costs of the tutors and provide some part of evaluation automatically

It would also be possible to create organisation-only meetings where only the teacher could see the recording of a session and only them would be able to then give feedback. This would be good especially for distance learning or home schooling. The grading could also be easier and more user friendly (I imagine that it would be possible to add the comments directly to the video recording to some kind of time axis.). A big advantage is that the feedback would be much more valuable since the students could see the exact moment where they made a mistake, because they could access the video recording.

Currently done: 
-Authentication system - Local, Google + Facebook Auth
-Boilerplate for React, Redux and NodeJS

Why not now:
-not enough time now because of other projects and Maturita exam
-not enough knowledge about DevOps and Microservice architecture. This system would have to be created to be able to handle massive ammount of traffic (a lot of sessions) and I do not have an expertise in this field yet. I am open to possible collaboration with a backend engineer
