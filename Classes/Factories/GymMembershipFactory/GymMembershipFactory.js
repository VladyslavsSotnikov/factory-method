import { GymMembership } from '../../Memberships/GymMembership/GymMembership.js';
import { MembershipFactory } from '../MembershipFactory/MembershipFactory.js';
export class GymMembershipFactory extends MembershipFactory {
    constructor(price, description) {
        super();
        this.price = price;
        this.description = description;
    }
    getMembership() {
        const membership = new GymMembership(this.price, this.description);
        return membership;
    }
}
