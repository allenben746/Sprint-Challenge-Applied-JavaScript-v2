// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicContainer = document.querySelector(".topics");
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log('Server request to /topics successful.')
        console.log(data.data.topics);

       

        data.data.topics.forEach(topic => {
            
            function createTab(param) {
                //Creates the element & gives it a class
                const tab = document.createElement('div');
                tab.classList.add('tab');
                console.log(`${param} tab created.`)

                //Gives the div element text
                tab.textContent = param;
            
                topicContainer.appendChild(tab);
                console.log(`${param} tab appeneded to parent.`)
            }

            createTab(topic);

        });
    })
    