class CalculateVotes:
    def __init__(self, total_voters: int, valid_votes: int, blank_votes: int, null_votes: int):
        self.total_voters = total_voters
        self.valid_votes = valid_votes
        self.blank_votes = blank_votes
        self.null_votes = null_votes

    def calculateValidVotes(self):
        return ((self.valid_votes / self.total_voters) * 100)
    
    def calculateBlankVotes(self):
        return ((self.blank_votes / self.total_voters) * 100)
    
    def calculateNullVotes(self):
        return ((self.null_votes / self.total_voters) * 100)
    

calculate_vote = CalculateVotes(total_voters=1000, valid_votes=800, blank_votes=150, null_votes=50)

print(f'Percentage of valid votes compared with total voters: {calculate_vote.calculateValidVotes()}')
print(f'Percentage of blank votes compared with total voters: {calculate_vote.calculateBlankVotes()}')
print(f'Percentage of null votes compared with total voters: {calculate_vote.calculateNullVotes()}')