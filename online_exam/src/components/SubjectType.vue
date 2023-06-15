<template>
    <BaseL>
      <div class="subjecttype-field">
        <div v-for="subject in $store.state.AdminSubjectList" :key="subject.id"
             class="subject chinese"
             :class="{ 'selected-option': isSelected(subject.id) }"
             @click="selectSubject(subject.id)">
          {{ subject.name }}
        </div>
      </div>
    </BaseL>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { ref } from 'vue'; // Import the 'ref' function from Vue Composition API
  import BaseL from './BaseL.vue';
  
  export default {
    name: "SubjectType",
    components: {
      BaseL
    },
    setup() {
      const store = useStore();
  
      const selectedSubjectId = ref(null);
  
      const isSelected = (subjectId) => {
        return subjectId === selectedSubjectId.value;
      };
  
      const selectSubject = (subjectId) => {
        selectedSubjectId.value = subjectId;

        store.commit("update_subjectType",subjectId);
      };
  
      return {
        isSelected,
        selectSubject
      };
    }
  }
  </script>
  
  <style scoped>
  .subjecttype-field {
    display: flex;
    justify-content: space-between;
  }
  
  .subject {
    flex: 1;
    text-align: center;
    cursor: pointer;
    transition: transform 0.1s ease;
  }
  
  .selected-option {
    color: blue;
  }
  
  .subject:hover {
    transform: scale(1.2);
  }
  </style>
  