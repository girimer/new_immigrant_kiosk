# CPSC 481 Human-Computer Interaction
## Group 3 - Immigrant Kiosk

Group members:
- Jaza Khan
- Minsu Kim
- Girimer Singh
- Fasial Hossain
- Jesse Dirks

### Project information 📄
**What cases/functions were implemented?**<br>
At this point in time, only two services have been fully implemented: the Calgary Transit screens as well as the Alberta Health Services screens. The rest of the services will display an under development message.<br><br>
These are some instructions meant to serve as an exact walkthrough for using the kiosk:<br>
Upon starting, you will be met with a welcome screen. To proceed, you need to click the Get Started button. Here you will find a language selection screen. Click on a language to set it as your language of choice for the entire kiosk. Then you will be at the Services screen, at which point you are able to select a service to learn more about it. The only screen which requires direct user input at this time is the "Alberta Health Services > Hospitals" screen, in which you are able to enter some values into the required fields. 


### To run project locally 💻

1. clone the repository

2. install dependencies:<br>
  open terminal<br>
  cd to the directory you cloned the repository onto<br>
  enter "npm install"<br>

3. to run:<br>
in the same terminal in the same directory:<br>
enter "npm run dev"<br>

4. to change screens:<br>
in `App.tsx`:<br>
comment out the screens you do not want to see with ctrl+/<br>
uncomment out the screens you do want to see also with ctrl+/<br>
