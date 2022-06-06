import { GymPlusPoolMembership } from '../../Memberships/GymPlusPoolMembership/GymPlusPoolMembership.js';
import { Membership } from '../../Memberships/interface/Membership.interface';
import { MembershipFactory } from '../MembershipFactory/MembershipFactory.js';

export class GymPlusPoolMembershipFactory extends MembershipFactory {
  constructor(public price: number, public description: string) {
    super();
  }

  getMembership(): Membership {
    const membership = new GymPlusPoolMembership(this.price, this.description);

    return membership;
  }
}
