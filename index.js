import { GymMembershipFactory } from './Classes/Factories/GymMembershipFactory/GymMembershipFactory.js';
import { GymPlusPoolMembershipFactory } from './Classes/Factories/GymPlusPoolMembershipFactory/GymPlusPoolMembershipFactory.js';
import { PersonalMemberhipFactory } from './Classes/Factories/PersonalMemberhipFactory/PersonalMemberhipFactory.js';
const basic = document.getElementById('basic');
const standart = document.getElementById('standart');
const premium = document.getElementById('premium');
basic === null || basic === void 0 ? void 0 : basic.addEventListener('click', function () {
    getMembership('g');
});
standart === null || standart === void 0 ? void 0 : standart.addEventListener('click', function () {
    getMembership('p');
});
premium === null || premium === void 0 ? void 0 : premium.addEventListener('click', function () {
    getMembership('t');
});
function getMembership(type) {
    const factory = getFactory(type);
    const membership = factory.getMembership();
    console.group('Your Membership is :');
    console.log('Name:', membership.name);
    console.log('Price:', membership.price);
    console.log('Description:', membership.description);
    console.groupEnd();
}
function getFactory(type) {
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
