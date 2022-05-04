function hello_there(){
  console.log("Hello There!")
}

// uses approach from: https://errorsea.com/how-to-change-text-onclick-event-javascript/
function change_text_mute(){
  document.getElementById("target-header").innerHTML = ""
  document.getElementById("target-text").innerHTML = ""
  }

function change_text_project(){
  document.getElementById("target-header").innerHTML = "About the Project"
  document.getElementById("target-text").innerHTML = project_text
  }

function change_text_church(){
  document.getElementById("target-header").innerHTML = "About the Church"
  document.getElementById("target-text").innerHTML = church_text
  }

function change_text_visualizations(){
  document.getElementById("target-header").innerHTML = "About the Visualizations"
  document.getElementById("target-text").innerHTML = vis_text
  }


const project_text = "The Leonarduskerk Project (LKP) focuses on the Church of St. Leonard in Zoutleeuw, Belgium. The purposes of this project is to understand the church as a central node in a dynamic web of relationships. In particular, the project seeks to tease out the various connections between workers, vendors, church officials, the larger community in Zoutleeuw, and nearby towns as they appear in church records.  While it acknowledges the efforts of artisans who are often studied (painters, sculptors, gold and silver smiths, etc.), this project primarily attends to the contributions of those normally overlooked in various cultural histories (unskilled laborers, wagoners, carpenters, etc.). The point of this approach is not only to help recover the lives and stories of people who are often anonymous in official records but also to understand and better appreciate the ever evolving role of the community of Zoutleeuw in building and maintaining its church. In order to carry out this investigation, the LKP takes advantage of traditional approaches to scholarship (library and archival research, theoretical models drawn from history and sociology, etc.) as well as Digital Humanities tools (data analytics, data visualization, network analysis, etc.). The point of this combined approach is to attempt to uncover, analyze, and interpret historical traces that help us understand the church and its environs in ways that are not possible using one single approach. The records, for example, contain entries for building materials, shipments of goods, work orders for church property, and receipts for music and food for festivals across almost two hundred years of activity. Data analytics and visualization can help make relationships that are difficult to see across thousands of entries—and that could be lost in traditional narrative approaches—more easily perceivable. Standard methods of historical and sociological inquiry can provide depth and texture to results from the data that are not self-evident. For example, the data may show curious clusterings of elements in a particular year but cannot tell us why. Investigating that year through a historical lens can help provide answers to the questions raised by the data.";

const church_text = "The church of St. Leonard's is located in the town of Zoutleeuw, which is in the Province of Flemish Brabant, roughly 65 km east of Brussels. In the Middle Ages, the town was a center for wool and cloth thanks to its position along a trade route to and from Cologne, Germany (roughly 170 km east). By the fifteenth century, Zoutleeuw was reasonably prosperous and, according to J. K. Steppe, the town was one of the 'six or seven principle cities of Brabant ...' (Steppe, 1997). St. Leonard's is the primary church in Zoutleeuw and, as such, was the center of local spiritual and social life. The church was built on the site of a former Romanesque chapel dedicated to St. Leonard of Noblac (who was called upon to render aid to prisoners, women in child birth, and the possessed). The small chapel was expanded to become a parish church in the thirteenth century and by the fourteenth century took on greater importance. In large part, the expansion of the church was supported by the local merchant class as well as the growth of the church as a pilgrimage site for the saint. While a large number of items (such as altarpieces, religious furniture, stained glass windows, etc.) were commissioned for the church in the fifteenth century, most of what survives dates to the sixteenth century or later. Ruben Suykerbuyk notes that the changes made to the church in the sixteenth century reflect a local increase in religious sentiment in the wake of the upheavals of the Protestant Rupture (Suykerbuyk, 2020). Unlike many other churches in the Low Countries, the upheavals of the sixteenth century did not have the same devastating impact on St. Leonard's. A massive sacrament house dating to the 16th century, for example, still survives intact in the church. Today, the church is considered a UNESCO world heritage site, thanks to its central tower, which contains a 24 bell carillon (reference 943bis-026).";

const vis_text = "This project uses data derived from the Church records of the St. Leonarduskerk. The information in the records was transcribed into .csv records representing various entities in keeping with the construction of an SQL database. The data was analyzed using the Python Pandas library. The data was cleaned and formatted for visualization using the Bokeh visualization library. The co-occurence graph was created using the Networkx library and then made visible using Bokeh. While there are a variety of libraries available for visualization, Bokeh was chosen for its compatibility with Python. It also has the benefit of including a series of interactive tools and features to enrich the visualizations. In each of the graphs or graph groupings included in this project, an effort has been made to provide interaction modes for users to explore the data on their own. Bokeh uses a suite of tools including, pan, zoom, and reset that make it possible to look at each graph in finer detail. The library also makes available a save function that allows the user to save a .jpg of the graph if they so choose.";


