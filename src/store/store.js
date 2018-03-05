import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

	state:{
		time:[ "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00","24:00"
      ],
    listTimeJob:{},
    jobs: {
        tasks:
          {
            Print:[
              {time: "08:00", task: '[Task A.1]'},
              {time: "09:00", task: '[Task B.1]'}
            ],
          
            Laminate:[
              {time: "09:00", task: '[Task B.2]'},
              {time: "10:00", task: '[Task A.2]'}	
            ],
          
            Trim:[
              {time: "11:00", task: '[Task A.3]'},
              {time: "12:00", task: '[Task B.3]'}
            ]
          }
    }
	},

	getters: {

		GetlistTimeJob: state => {	
			//set the tasks
			state.listTimeJob.Print = [];
			state.listTimeJob.Laminate = [];
			state.listTimeJob.Trim = [];

			//fill array tasks equal to empty string
			for (var x = 0; x < 25; x++) {
				state.listTimeJob.Print.push("");
				state.listTimeJob.Laminate.push("");
				state.listTimeJob.Trim.push("");
			}
			//add tasks Laminate task
			for (var y = 0; y < state.jobs.tasks.Laminate.length; y++){
				var index = parseInt(state.jobs.tasks.Laminate[y].time.split(":"), 10);
				state.listTimeJob.Laminate[index] = state.jobs.tasks.Laminate[y].task
			}

			//add tasks Print task
			for (var y = 0; y < state.jobs.tasks.Print.length; y++){
				let index = parseInt(state.jobs.tasks.Print[y].time.split(":"), 10);
				state.listTimeJob.Print[index] = state.jobs.tasks.Print[y].task
			}

			//add tasks Trim task
			for (var y = 0; y < state.jobs.tasks.Trim.length; y++){
				var index = parseInt(state.jobs.tasks.Trim[y].time.split(":"), 10);
				state.listTimeJob.Trim[index] = state.jobs.tasks.Trim[y].task
			}

			return state.listTimeJob;
		
		}
	}
})