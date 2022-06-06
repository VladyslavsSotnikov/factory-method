import { PersonalMembership } from '../../Memberships/PersonalMemberhip/PersonalMemberhip.js';
import { MembershipFactory } from '../MembershipFactory/MembershipFactory.js';
export class PersonalMemberhipFactory extends MembershipFactory {
    constructor(price, description) {
        super();
        this.price = price;
        this.description = description;
    }
    getMembership() {
        const membership = new PersonalMembership(this.price, this.description);
        return membership;
    }
}
