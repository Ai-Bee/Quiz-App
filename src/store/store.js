import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           difficulty: "",
           category: "",
           questions: [],
           highScore: 0
         },
         mutations: {
           mutateDifficulty(state, difficulty) {
             state.difficulty = difficulty;
           },
           mutateScore(state, score){
               state.highScore = score;
           },
           mutateCategory(state, category) {
             state.category = category;
           },
           mutateQuestions(state, questions) {
             state.questions = questions;
           }
         },
         getters: {
           showDifficulty: state => state.difficulty,
           showCategory: state => state.category,
           showQuestions: state => state.questions,
           showHighScore: state => state.highScore,
         },
         actions: {
           changeDifficulty({ commit }, difficulty) {
             commit("mutateDifficulty", difficulty);
           },
           changeScore({commit}, score){
               commit("mutateScore", score);
           },
           changeCategory({ commit }, category) {
             commit("mutateCategory", category);
           },
           changeQuestions({ commit }, questions) {
             commit("mutateQuestions", questions);
           }
         }
       });