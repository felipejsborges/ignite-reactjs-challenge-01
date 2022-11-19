import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
	let server = createServer({
		environment,

		models: {
			task: Model,
		},

		seeds(server) {
			server.create("task", {
				id: '1',
				description: 'Tomar café da manhã',
				isCompleted: true
			})
			server.create("task", {
				id: '2',
				description: 'Se exercitar',
				isCompleted: true
			})
			server.create("task", {
				id: '3',
				description: 'Meditar',
				isCompleted: false
			})
			server.create("task", {
				id: '4',
				description: 'Trabalhar',
				isCompleted: false
			})
			server.create("task", {
				id: '5',
				description: 'Estudar',
				isCompleted: true
			})
		},

		routes() {
			this.namespace = "api"

			this.get("/tasks", (schema) => {
				return schema.tasks.all()
			})
		},
	})

	return server
}