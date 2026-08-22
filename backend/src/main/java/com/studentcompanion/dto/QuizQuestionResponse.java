package com.studentcompanion.dto;

import java.util.List;
import com.studentcompanion.model.QuizQuestion;

public record QuizQuestionResponse(Long id, String question, List<String> options) {
    public static QuizQuestionResponse from(QuizQuestion question) {
        return new QuizQuestionResponse(question.getId(), question.getQuestion(), question.getOptions());
    }
}
