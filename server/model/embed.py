from transformers import AutoModel, AutoTokenizer


# or 'BM-K/KoSimCSE-bert-multitask'
model = AutoModel.from_pretrained('BM-K/KoSimCSE-roberta-multitask')
tokenizer = AutoTokenizer.from_pretrained(
    'BM-K/KoSimCSE-roberta-multitask')  # or 'BM-K/KoSimCSE-bert-multitask'

sentences = ['치타가 들판을 가로 질러 먹이를 쫓는다.']

inputs = tokenizer(sentences, padding=True,
                   truncation=True, return_tensors="pt")

embeddings, _ = model(**inputs, return_dict=False)


print(embeddings.shape)
