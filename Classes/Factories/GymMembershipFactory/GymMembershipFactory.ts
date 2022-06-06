import { GymMembership } from '../../Memberships/GymMembership/GymMembership.js';
import { Membership } from '../../Memberships/interface/Membership.interface';
import { MembershipFactory } from '../MembershipFactory/MembershipFactory.js';

export class GymMembershipFactory extends MembershipFactory {
  constructor(public price: number, public description: string) {
    super();
  }

  getMembership(): Membership {
    const membership = new GymMembership(this.price, this.description);

    return membership;
  }
}
