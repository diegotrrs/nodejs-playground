var nodevember = {
  numOfAttendees: 0,
  incrementNumOfAttendees: function() {
    this.numOfAttendees++;
  }
  // other properties
};


//a.on('click', nodevember.incrementNumOfAttendees)
//a.on('click', nodevember.incrementNumOfAttendees.bind(nodevember))
//$('.add-attendee-btn').on('click', nodevember.incrementNumOfAttendees.bind(nodevember));


function testing(){
  //@ts-ignore
  console.log(this)
}

testing()


