<template>
  <div class="container-fluid">
    <div class="modal" id="edit-character" tabindex="-1" aria-labelledby="#edit-character" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Name Your Character
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="setName">
              <div class="form-group">
              </div>
              <div class="form-group">
                <label for="comment">Name:</label>
                <input type="text"
                       class="form-control"
                       id="name"
                       aria-describedby="name"
                       placeholder="Name"
                       rows="6"
                       columns="10"
                       v-model="state.character.name"
                       required
                >
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input"
                       type="radio"
                       name="inlineRadioOptions"
                       id="inlineRadio1"
                       value="female"
                       v-model="state.character.gender"
                >
                <label class="form-check-label" for="inlineRadio1">Female</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="male">
                <label class="form-check-label" for="inlineRadio2">Male</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input"
                       type="radio"
                       name="inlineRadioOptions"
                       id="inlineRadio3"
                       value="other"
                >
                <label class="form-check-label" for="inlineRadio3">Other</label>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Alignment
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item">Lawful/Good</a>
                    <a class="dropdown-item">Lawful/Neutral</a>
                    <a class="dropdown-item">Lawful/Evil</a>
                    <a class="dropdown-item">Neutral/Good</a>
                    <a class="dropdown-item">Neutral/Neutral</a>
                    <a class="dropdown-item">Neutral/Evil</a>
                    <a class="dropdown-item">Chaotic/Good</a>
                    <a class="dropdown-item">Chaotic/Neutral</a>
                    <a class="dropdown-item">Chaotic/Evil</a>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
// import { charactersService } from '../services/CharactersService'
// import Notification from '../utils/Notification'
import $ from 'jquery'
export default {
  name: 'EditModal',
  props: {
    // character: {
    //   type: Object,
    //   required: true
    // }
  },
  setup(props) {
    const state = reactive({
      character: computed(() => AppState.character)
    })
    return {
      state,
      setName() {
        AppState.character.name = state.character.name
        $('#edit-character').modal('hide')
      }
    }
  }
}
</script>
<style lang="">
</style>
