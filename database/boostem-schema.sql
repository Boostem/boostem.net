CREATE TABLE IF NOT EXISTS tags (
    id SERIAL   PRIMARY KEY,
    name        VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
    id                  SERIAL PRIMARY KEY,
    title               VARCHAR(255) NOT NULL,
    description         TEXT,
    image               VARCHAR(255),
    demo_url            VARCHAR(255),
    repo_url            VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS project_tags (
    project_id                      INTEGER NOT NULL,
    tag_id                          INTEGER NOT NULL,
    FOREIGN KEY (project_id)        REFERENCES projects(id),
    FOREIGN KEY (tag_id)            REFERENCES tags(id),
    PRIMARY KEY (project_id, tag_id)
);
 
 
 
 
 
