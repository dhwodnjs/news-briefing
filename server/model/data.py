import numpy as np
import torch
from torch.utils.data import Dataset, DataLoader
from typing import List, TypedDict


class UserInteraction(TypedDict):
    user: int
    item: List[int]


def get_random_item_excluding_range(lower_bound: int,
                                    upper_bound: int,
                                    exclusion_set: set):
    random_item = np.random.randint(lower_bound, upper_bound)
    while random_item in exclusion_set:
        random_item = np.random.randint(lower_bound, upper_bound)
    return random_item


class RecommendationDataset(Dataset):
    def __init__(self,
                 user_interactions: List[UserInteraction],
                 max_user_id: int,
                 max_item_id: int,
                 sequence_length: int):
        self.user_interactions: List[UserInteraction] = user_interactions
        self.max_user_id: int = max_user_id
        self.max_item_id: int = max_item_id
        self.sequence_length: int = sequence_length

    def __len__(self) -> int:
        return len(self.user_interactions)

    def __getitem__(self, index):
        user_id = list(self.user_interactions.keys())[index]

        sequence = np.zeros([self.sequence_length], dtype=np.int32)
        positive_items = np.zeros([self.sequence_length], dtype=np.int32)
        negative_items = np.zeros([self.sequence_length], dtype=np.int32)
        next_item = self.user_interactions[user_id][-1]

        interaction_set = set(self.user_interactions[user_id])
        sequence_idx = self.sequence_length - 1

        for item in reversed(self.user_interactions[user_id][:-1]):
            sequence[sequence_idx] = item
            positive_items[sequence_idx] = next_item
            if next_item != 0:
                negative_items[sequence_idx] = get_random_item_excluding_range(
                    1, self.max_item_id + 1, interaction_set)
            next_item = item
            sequence_idx -= 1
            if sequence_idx == -1:
                break

        return user_id, sequence, positive_items, negative_items


def create_recommendation_dataloader(user_interactions, max_user_id, max_item_id, sequence_length, batch_size=64):
    recommendation_dataset = RecommendationDataset(
        user_interactions, max_user_id, max_item_id, sequence_length)
    recommendation_dataloader = DataLoader(
        recommendation_dataset, batch_size=batch_size, shuffle=True)
    return recommendation_dataloader
