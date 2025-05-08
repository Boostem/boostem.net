package com.boostem.rest;

import com.boostem.model.Project;
import com.boostem.model.Tag;
import com.boostem.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }

    @GetMapping("/{id}/tags")
    public ResponseEntity<List<Tag>> getTagsByProjectId(@PathVariable("id") Integer id) {
        return ResponseEntity.ok(projectService.getTagsByProjectId(id));
    }

    @GetMapping("/tag/{tagId}")
    public ResponseEntity<List<Project>> getProjectsByTagId(@PathVariable("tagId") Integer tagId) {
        return ResponseEntity.ok(projectService.getProjectsByTagId(tagId));
    }
}




