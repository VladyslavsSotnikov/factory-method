import { GymMembershipFactory } from './Classes/Factories/GymMembershipFactory/GymMembershipFactory.js';
import { GymPlusPoolMembershipFactory } from './Classes/Factories/GymPlusPoolMembershipFactory/GymPlusPoolMembershipFactory.js';
import { MembershipFactory } from './Classes/Factories/MembershipFactory/MembershipFactory.js';
import { PersonalMemberhipFactory } from './Classes/Factories/PersonalMemberhipFactory/PersonalMemberhipFactory.js';

const basic = document.getElementById('basic');
const standart = document.getElementById('standart');
const premium = document.getElementById('premium');

basic?.addEventListener('click', function () {
  getMembership('g');
});

standart?.addEventListener('click', function () {
  getMembership('p');
});

premium?.addEventListener('click', function () {
  getMembership('t');
});

function getMembership(type: MembershipType) {
  const factory = getFactory(type);
  const membership = factory.getMembership();

  console.group('Your Membership is :');
  console.log('Name:', membership.name);
  console.log('Price:', membership.price);
  console.log('Description:', membership.description);
  console.groupEnd();
}

function getFactory(type: MembershipType): MembershipFactory {
  switch (type) {
    case 'g': {
      return new GymMembershipFactory(100, 'Basic membership!');
    }

    case 'p': {
      return new GymPlusPoolMembershipFactory(200, 'Good choise!');
    }

    case 't': {
      return new PersonalMemberhipFactory(500, 'You are really cool!');
    }
    default: {
      return new GymMembershipFactory(100, 'Basic membership!');
    }
  }
}

type MembershipType = 'g' | 'p' | 't';
