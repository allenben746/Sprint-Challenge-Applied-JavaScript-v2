// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('Server request to /topics successful.')
        console.log(data.data.topics);

        const tabContainer = document.querySelector('.tabs');

        data.data.topics.forEach(topic => {
            
            function createTab(topic) {
                //Creates the element & gives it a class
                const tab = document.createElement('div');
                tab.classList.add('tab');
                console.log(`${topic} tab created.`)

                //Gives the div element text
                tab.textContent = topic;

                tabContainer.appendChild(tab);
                console.log(`${topic} tab appeneded to parent.`)
            
            }

            createTab(topic);

        });
    })
    