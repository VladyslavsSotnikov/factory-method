import { Membership } from '../../Memberships/interface/Membership.interface';
import { PersonalMembership } from '../../Memberships/PersonalMemberhip/PersonalMemberhip.js';
import { MembershipFactory } from '../MembershipFactory/MembershipFactory.js';

export class PersonalMemberhipFactory extends MembershipFactory {
  constructor(public price: number, public description: string) {
    super();
  }

  getMembership(): Membership {
    const membership = new PersonalMembership(this.price, this.description);

    return membership;
  }
}
