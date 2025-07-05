package com.jwt.notes;




import com.jwt.entity.User;
import jakarta.persistence.*;

@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // foreign key column
    private User user;

    // No-args constructor
    public Note() {}

    // All-args constructor
    public Note(Long id, String content, User user) {
        this.id = id;
        this.content = content;
        this.user = user;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        String result = "Note{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", user=" + (user != null ? user.getUsername() : "null") +
                '}';
        System.out.println(result);
        return result;
    }
}
