<template>
  <section class="guest-request">
    <div class="top flex space-between align-center">
      <h1>Request To Stay</h1>
      <span @click="$emit('hideRequestForm')">&times;</span>
    </div>
    <hr>
    <div class="content flex flex-col">
      <el-form :inline="false" :model="info" class="demo-form-inline">
        <b-form-group class="input" required>
          <label for="date">Choose dates:</label>
          <v-date-picker mode="range" v-model="info.selectedDate" show-caps></v-date-picker>
        </b-form-group>

        <b-form-group class="input" required>
          <b-form-textarea
            v-model="info.description"
            id="textarea"
            placeholder="Write a Message..."
            rows="3"
            max-rows="6"
            required
          />
        </b-form-group>

        <div class="btn-container flex justify-center">
          <button class="btn" @click="onSend">Send</button>
        </div>
      </el-form>
    </div>
  </section>
</template>

<script>
import utilService from "@/services/utilService.js";
import eventBus from "@/services/eventbus-service.js";
export default {
  name: "guest-request",
  data() {
    return {
      info: {
        selectedDate: {
          start: Date.now(),
          end: Date.now() + 60 * 60 * 72 * 1000
        },
        description: ""
      }
    };
  },
  methods: {
    async onSend() {
      if (!this.getLoggedUser) {
        eventBus.$emit('popToast', 'info', 'bottom-start', 3000, 'Please sign in to continue...');
        return;
      }
      if (!this.isFormValid) {
        eventBus.$emit('popToast', 'info', 'bottom-start', 3000, `Please complete all fields to continue...`);
        return;
      }
      let request = this.$store.getters.emptyRequest;
      request.arrivalDate = this.info.selectedDate.start;
      request.leavingDate = this.info.selectedDate.end;
      request.description = this.info.description;
      this.$emit('hideRequestForm');
      await this.$store.dispatch({ type: "sendRequest", request: request, targetId: this.getCurrUser._id });
      eventBus.$emit('popToast', 'info', 'bottom-start', 3000, `Your request was sent!`);
    },
  },
  computed: {
    getLoggedUser() {
      return this.$store.getters.loggedUser;
    },
    getCurrUser() {
      return this.$store.getters.currUser;
    },
    isFormValid() {
      return (
        this.info.selectedDate.start &&
        this.info.selectedDate.end &&
        this.info.description
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.guest-request {
  z-index: 10;
  position: fixed;
  top: 40%;
  left: 50%;
  width: 30%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background-color: white;
  color: rgb(62, 62, 62);
}
@media (max-width: 1200px) {
  .guest-request {
    width: 40%;
  }
}
@media (max-width: 768px) {
  .guest-request {
    width: 60%;
  }
}
@media (max-width: 568px) {
  .guest-request {
    width: 90%;
  }
}

.top {
  padding: 10px 30px 10px 30px;
  background-color: #1dbf73;
  border-radius: 5px 5px 0 0;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
}

hr {
  margin: 0;
}

span {
  cursor: pointer;
  font-size: 2.5rem;
  color: #fff;
}

.content {
  padding: 30px 30px 0 30px;
}

.input {
  margin: 0 30px 30px 30px;
}

.btn-container {
  margin: 30px;
  .btn {
    width: 100%;
  }
}
</style>
