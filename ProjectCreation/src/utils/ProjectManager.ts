import { Project } from '../models/Project'

export class ProjectManager {

    private static _instance: ProjectManager
    private _projects: Project[] = []

    private constructor() {
    }

    static get instance() {
        if (this._instance == null) this._instance = new ProjectManager()
        return this._instance
    }

    addProject(project: Project) {
        try {
            this._projects.push(project)
            console.log('Added project', project)

            const singleProjectTemplate = document.getElementById('single-project')! as HTMLTemplateElement

            const li = document.importNode(singleProjectTemplate.content, true).firstElementChild as HTMLElement
            const textNode = document.createTextNode(JSON.stringify(project))
            li.appendChild(textNode)

            const ul = document.querySelector('ul')!
            ul.appendChild(li)
        }
        catch (e) {
            console.error('Error during adding project: ' + e)
        }
    }

}