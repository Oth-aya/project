package tn.enig.DappUnv.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
public class Student {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private Date dateNaissance;
    private String phoneNumber;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToOne
    private User studentAccount;

    public Student() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(Date dateNaissance) {
        this.dateNaissance = dateNaissance;
    }


    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public User getStudentAccount() {
        return studentAccount;
    }

    public void setStudentAccount(User studentAccount) {
        this.studentAccount = studentAccount;
    }
}
