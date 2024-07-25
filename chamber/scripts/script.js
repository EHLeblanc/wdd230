document.addEventListener('DOMContentLoaded', () => {
    const memberContainer = document.getElementById('memberContainer');
    const toggleViewButton = document.getElementById('toggleView');
    let isGridView = true;

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data));

    toggleViewButton.addEventListener('click', () => {
        isGridView = !isGridView;
        memberContainer.className = isGridView ? 'grid' : 'list';
    });

    function displayMembers(members) {
        memberContainer.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.className = 'member';
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.description}</p>
            `;
            memberContainer.appendChild(memberElement);
        });
        memberContainer.className = isGridView ? 'grid' : 'list';
    }
});