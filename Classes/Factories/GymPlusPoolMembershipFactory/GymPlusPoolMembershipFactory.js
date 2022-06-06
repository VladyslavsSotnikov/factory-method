import { GymPlusPoolMembership } from '../../Memberships/GymPlusPoolMembership/GymPlusPoolMembership.js';
import { MembershipFactory } from '../MembershipFactory/MembershipFactory.js';
export class GymPlusPoolMembershipFactory extends MembershipFactory {
    constructor(price, description) {
        super();
        this.price = price;
        this.description = description;
    }
    getMembership() {
        const membership = new GymPlusPoolMembership(this.price, this.description);
        return membership;
    }
}
