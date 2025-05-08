INSERT INTO tags (name)
VALUES
    ('React'),     -- 1
    ('Angular'),   -- 2
    ('Vue'),       -- 3
    ('Next.js'),   -- 4
    ('TypeScript'), -- 5
    ('JavaScript'), -- 6
    ('Python'),    -- 7
    ('Django'),    -- 8
    ('Flask'),     -- 9
    ('Node.js'),   -- 10
    ('Express'),   -- 11
    ('Java'),      -- 12
    ('Spring Boot'), -- 13
    ('PHP'),       -- 14
    ('Laravel'),   -- 15
    ('MongoDB'),   -- 16
    ('PostgreSQL'), -- 17
    ('MySQL'),     -- 18
    ('GraphQL'),   -- 19
    ('REST API'),  -- 20
    ('Docker'),    -- 21
    ('Kubernetes'), -- 22
    ('AWS'),       -- 23
    ('Firebase'),  -- 24
    ('Machine Learning'), -- 25
    ('TensorFlow'), -- 26
    ('Mobile'),    -- 27
    ('React Native'), -- 28
    ('Flutter'),   -- 29
    ('DevOps'),    -- 30
    ('CSS'),       -- 31
    ('Tailwind'),  -- 32
    ('Bootstrap'); -- 33

INSERT INTO projects (id, title, description, image, demo_url, repo_url)
VALUES
    (1, 'DevConnect', 'A social platform for developers to share projects, ask questions and collaborate. Built with React, Node.js and MongoDB with real-time notifications using Socket.io.', 'https://picsum.photos/600/400', 'https://devconnect-demo.netlify.app', 'https://github.com/boostem/devconnect'),

    (2, 'TaskFlow', 'A productivity application with Kanban boards, time tracking, and team collaboration features. Implemented with Vue.js and Firebase with offline support.', 'https://picsum.photos/600/400', 'https://taskflow-app.vercel.app', 'https://github.com/boostem/taskflow'),

    (3, 'RecipeFinder', 'A recipe search engine that allows filtering by ingredients, cuisine, and dietary restrictions. Built with Angular and a Django REST API backend.', 'https://picsum.photos/600/400', 'https://recipefinder-demo.herokuapp.com', 'https://github.com/boostem/recipefinder'),

    (4, 'CodeReviewAI', 'An AI-powered code review tool that provides suggestions and detects potential bugs. Uses Python, TensorFlow and integrates with GitHub via webhooks.', 'https://picsum.photos/600/400', 'https://codereview-ai.dev', 'https://github.com/boostem/codereview-ai'),

    (5, 'EcoTracker', 'A mobile application to track and reduce your carbon footprint with challenges and community features. Developed with React Native and Express backend.', 'https://picsum.photos/600/400', 'https://ecotracker-demo.netlify.app', 'https://github.com/boostem/ecotracker'),

    (6, 'DataVizDashboard', 'An interactive data visualization dashboard for business analytics with customizable widgets. Built with Next.js, D3.js and PostgreSQL.', 'https://picsum.photos/600/400', 'https://dataviz-dashboard.vercel.app', 'https://github.com/boostem/dataviz-dashboard'),

    (7, 'MicroserviceStore', 'An e-commerce platform built with a microservices architecture. Utilizes Spring Boot, Docker, Kubernetes and event-driven communication.', 'https://picsum.photos/600/400', 'https://microstore-demo.aws.app', 'https://github.com/boostem/microservice-store'),

    (8, 'PhotoGramAI', 'An AI-enhanced photo sharing platform with automatic tagging, content moderation and filters. Uses TensorFlow, Flask and React.', 'https://picsum.photos/600/400', 'https://photogram-ai.vercel.app', 'https://github.com/boostem/photogram-ai'),

    (9, 'CloudBudget', 'A cloud cost optimization tool that analyzes spending patterns and suggests ways to reduce AWS costs. Built with TypeScript, Express and Chart.js.', 'https://picsum.photos/600/400', 'https://cloudbudget-app.herokuapp.com', 'https://github.com/boostem/cloud-budget'),

    (10, 'LearnLang', 'An interactive language learning application with speech recognition and adaptive learning paths. Uses React, Django and TensorFlow for voice processing.', 'https://picsum.photos/600/400', 'https://learnlang-demo.netlify.app', 'https://github.com/boostem/learnlang'),

    (11, 'HealthTrackr', 'A comprehensive health tracking application with workout plans, nutrition logs and progress visualization. Built with Flutter and Firebase.', 'https://picsum.photos/600/400', 'https://healthtrackr-demo.app', 'https://github.com/boostem/healthtrackr'),

    (12, 'GitInsight', 'A developer tool that provides analytics and insights for GitHub repositories, visualizing contribution patterns and code quality metrics. Uses Next.js and GraphQL.', 'https://picsum.photos/600/400', 'https://gitinsight.dev', 'https://github.com/boostem/gitinsight');

INSERT INTO project_tags (project_id, tag_id)
VALUES
    -- DevConnect
    (1, 1),  -- React
    (1, 10), -- Node.js
    (1, 11), -- Express
    (1, 16), -- MongoDB
    (1, 20), -- REST API

    -- TaskFlow
    (2, 3),  -- Vue
    (2, 6),  -- JavaScript
    (2, 24), -- Firebase
    (2, 31), -- CSS

    -- RecipeFinder
    (3, 2),  -- Angular
    (3, 5),  -- TypeScript
    (3, 8),  -- Django
    (3, 7),  -- Python
    (3, 20), -- REST API

    -- CodeReviewAI
    (4, 7),  -- Python
    (4, 25), -- Machine Learning
    (4, 26), -- TensorFlow
    (4, 23), -- AWS

    -- EcoTracker
    (5, 28), -- React Native
    (5, 27), -- Mobile
    (5, 11), -- Express
    (5, 10), -- Node.js

    -- DataVizDashboard
    (6, 4),  -- Next.js
    (6, 5),  -- TypeScript
    (6, 17), -- PostgreSQL
    (6, 32), -- Tailwind

    -- MicroserviceStore
    (7, 12), -- Java
    (7, 13), -- Spring Boot
    (7, 21), -- Docker
    (7, 22), -- Kubernetes
    (7, 18), -- MySQL

    -- PhotoGramAI
    (8, 9),  -- Flask
    (8, 1),  -- React
    (8, 7),  -- Python
    (8, 26), -- TensorFlow
    (8, 25), -- Machine Learning

    -- CloudBudget
    (9, 5),  -- TypeScript
    (9, 11), -- Express
    (9, 23), -- AWS
    (9, 10), -- Node.js

    -- LearnLang
    (10, 1), -- React
    (10, 8), -- Django
    (10, 26), -- TensorFlow
    (10, 7),  -- Python

    -- HealthTrackr
    (11, 29), -- Flutter
    (11, 27), -- Mobile
    (11, 24), -- Firebase

    -- GitInsight
    (12, 4),  -- Next.js
    (12, 19), -- GraphQL
    (12, 5),  -- TypeScript
    (12, 32); -- Tailwind

 
 
 
 
 
 
 
 
