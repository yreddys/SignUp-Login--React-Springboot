package com.jwt.notes;


import org.springframework.security.core.Authentication;
import com.jwt.entity.User;
import com.jwt.repo.UserRepository;


import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



import com.jwt.entity.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin
public class NoteController {

    @Autowired private NoteRepository noteRepo;
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/save")
    public ResponseEntity<String> saveNote(@RequestBody Note note, @AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow();

        note.setUser(user);
        System.out.println("user"+user);
        System.out.println("note"+note);
        System.out.println("User Details: " + user.getUsername());
        System.out.println("Note Content: " + note.getContent());

        noteRepository.save(note);
        return ResponseEntity.ok("Note saved");
    }
    @GetMapping("/my-notes")
    public ResponseEntity<List<Note>> getMyNotes(@AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByUsername(userDetails.getUsername()).orElseThrow();
        List<Note> notes = noteRepository.findByUser(user);

        // 🔽 Print each note
        for (Note note : notes) {
            System.out.println(note);
        }

        return ResponseEntity.ok(notes);
    }

}
