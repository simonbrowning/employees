import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import _ from 'lodash';
import {image, helpers} from 'faker';

Meteor.startup(() => {

  //Check to see if there is any data in the collecion already

  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);
  if(!numberRecords){

    _.times(5000,()=>{
      const {name, email, phone} = helpers.createCard();

      Employees.insert({
          name, email, phone,
          avatar : image.avatar()
      });
    });
  }

  //Publications
  Meteor.publish('employees',function(per_page){
    return Employees.find({},{limit: per_page});
  });
});
