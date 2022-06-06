import { Membership } from '../../Memberships/interface/Membership.interface';

export abstract class MembershipFactory {
  abstract getMembership(): Membership;
}
