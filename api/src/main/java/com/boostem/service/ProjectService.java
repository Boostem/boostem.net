package com.boostem.service;

import com.boostem.dao.ProjectDAO;
import com.boostem.model.Project;
import com.boostem.model.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectDAO projectDAO;

    @Autowired
    public ProjectService(ProjectDAO projectDAO) {
        this.projectDAO = projectDAO;
    }

    public List<Project> getAllProjects() {
        return projectDAO.findAll();
    }

    public Project getProjectById(Integer id) {
        return projectDAO.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
    }

    public List<Tag> getTagsByProjectId(Integer id) {
        Project project = getProjectById(id);
        return project.getTags();
    }

    public List<Project> getProjectsByTagId(Integer tagId) {
        return projectDAO.findByTagsId(tagId);
    }
}



