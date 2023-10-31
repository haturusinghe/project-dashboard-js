function handleFormSubmit(event) {
    event.preventDefault(); 
    

    const projectId = document.getElementById('projectId').value;
    const projectName = document.getElementById('projectName').value;
    const revenue = parseFloat(document.getElementById('revenue').value);
    const isCompleted = document.getElementById('isCompleted').checked;

    addNewProject(projectId, projectName, revenue, isCompleted);
}

function addNewProject(projectId, projectName, revenue, isCompleted) {
    console.log('Adding new project...');
    console.log('Project ID:', projectId);
    console.log('Project Name:', projectName);
    console.log('Revenue:', revenue);
    console.log('Completed:', isCompleted);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    const backBtn = document.getElementById('backToProjectListBtn');
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    form.addEventListener('submit', handleFormSubmit);
});

