import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LoginTutor } from "./pages/LoginTutor.jsx";
import { RegisterTutor } from "./pages/RegisterTutor.jsx";
import { Game } from "./pages/Game.jsx";
import { RegisterChild } from "./pages/RegisterChild.jsx";
import { TutorStats } from "./pages/TutorStats.jsx";
import { GameOver } from "./pages/GameOver.jsx";
import { TutorStatsSubject } from "./pages/TutorStatsSubject.jsx";
import { QuestionsTutor } from "./pages/QuestionsTutor.jsx";
import { QuestionsChild } from "./pages/QuestionsChild.jsx";
import { ExercisesSubject } from "./pages/ExercisesSubject.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.jsx";
import { TutorProtectedRoute } from "./pages/TutorProtectedRoute.jsx";
import { createRoot } from "react-dom/client";
import { SubjectProvider } from "./context/SubjectContext.jsx";
import { ChildProfile } from "./pages/ChildProfile.jsx";
import { ExerciseQuestion } from "./pages/ExerciseQuestion.jsx";
import { QuestionProvider } from "./context/QuestionContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <SubjectProvider>
        <QuestionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/tutor" element={<RegisterTutor />} />
              <Route path="/login/tutor" element={<LoginTutor />} />
              <Route path="/gameover" element={<GameOver />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/game" element={<Game />} />
                <Route path="/subject/:id" element={<ExercisesSubject />} />
                <Route
                  path="exercise/:subject_id/:id_question"
                  element={<ExerciseQuestion />}
                />
                <Route path="/questions" element={<QuestionsChild />} />
                <Route path="/profile" element={<ChildProfile />} />
              </Route>
              <Route element={<TutorProtectedRoute />}>
                <Route path="/register/child" element={<RegisterChild />} />
                <Route path="/tutor/stats" element={<TutorStats />} />
                <Route
                  path="/tutor/stats/:id"
                  element={<TutorStatsSubject />}
                />
                <Route path="/questions/tutor" element={<QuestionsTutor />} />
              </Route>
            </Routes>
            <Toaster position="top-center" reverseOrder={false} />
          </BrowserRouter>
        </QuestionProvider>
      </SubjectProvider>
    </AuthProvider>
  </React.StrictMode>
);
