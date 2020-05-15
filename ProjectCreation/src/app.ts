// Code goes here!
import {Project} from './models/Project'
import {ProjectManager} from './utils/ProjectManager'

const appDiv = document.getElementById('app')! as HTMLDivElement
const formTemplate = document.getElementById('project-input')! as HTMLTemplateElement
const projectListTemplate = document.getElementById('project-list')! as HTMLTemplateElement
appDiv.append(formTemplate.content.cloneNode(true))
appDiv.append(projectListTemplate.content.cloneNode(true))

const form = document.querySelector('form')!
form.addEventListener('submit', e => {
    e.preventDefault()
    const titleElement = document.getElementById('title')! as HTMLInputElement
    const descriptionElement = document.getElementById('description')! as HTMLInputElement
    const peopleElement = document.getElementById('people')! as HTMLInputElement

    const newProject = new Project(titleElement.value, descriptionElement.value, +peopleElement.value)
    ProjectManager.instance.addProject(newProject)

    titleElement.value = ''
    descriptionElement.value = ''
    peopleElement.value = ''
})
