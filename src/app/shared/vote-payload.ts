import { VoteType } from '../shared/vote-button/vote-type';

export class VotePayload {
    voteType: VoteType;
    postId: number;
}