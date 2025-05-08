INSERT INTO tags (name)
VALUES
    ('React'),     -- 1
    ('Next.js'),   -- 2
    ('TypeScript'), -- 3
    ('JavaScript'), -- 4
    ('Java'),      -- 5
    ('Spring Boot'), -- 6
    ('PHP'),       -- 7
    ('Laravel'),   -- 8
    ('PostgresQL'), -- 9
    ('REST'),  -- 10
    ('Docker'),    -- 11
    ('Oracle'),       -- 12
    ('Cloud Hosting'),  -- 13
    ('React Native'), -- 14
    ('Flutter'),   -- 15
    ('DevOps'),    -- 16
    ('CSS'),       -- 17
    ('Tailwind');  -- 18

INSERT INTO projects (id, title, description, image, demo_url, repo_url)
VALUES
    (1, 'Personal Portfolio Website', 'A microservice docker hosting fullstack web application that demonstrates my professional software experience, hobby projects, and my personal journey of DJing. Auto-deploys every merge to master from GitHub. Stores dynamic information in a Postgresql database', '/boostemnet.png', 'https://boostem.net', 'https://github.com/boostem/boostemnet');


INSERT INTO project_tags (project_id, tag_id)
VALUES
    -- Boostem.net
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (1, 7),
    (1, 8),
    (1, 9),
    (1, 10),
    (1, 11),
    (1, 12),
    (1, 13),
    (1, 14),
    (1, 15),
    (1, 16),
    (1, 17),
    (1, 18);

 
 
 
 
