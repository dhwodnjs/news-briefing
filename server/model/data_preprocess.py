import pandas as pd
import ast

columns = ["ID", "CategorySeq", "PressSeq", "TitleSeq", "UrlSeq"]

df1 = pd.read_csv(
    "server/crawl/output/Comment_경제_20230816_20230816.csv", names=columns)
df2 = pd.read_csv(
    "server/crawl/output/Comment_사회_20230816_20230816.csv", names=columns)
df3 = pd.read_csv(
    "server/crawl/output/Comment_생활문화_20230816_20230816.csv", names=columns)
df4 = pd.read_csv(
    "server/crawl/output/Comment_세계_20230816_20230816.csv", names=columns)
df5 = pd.read_csv(
    "server/crawl/output/Comment_오피니언_20230816_20230816.csv", names=columns)
df6 = pd.read_csv(
    "server/crawl/output/Comment_정치_20230816_20230816.csv", names=columns)

# vertical stack above df.
df = pd.concat([df1, df2, df3, df4, df5, df6],
               axis=0).reset_index(drop=True)
df = df.drop(columns=["UrlSeq"])
df = df.drop_duplicates(subset="ID", keep="first")

# check duplicates
df['CategorySeq'] = df['CategorySeq'].apply(ast.literal_eval)
df['PressSeq'] = df['PressSeq'].apply(ast.literal_eval)
df['TitleSeq'] = df['TitleSeq'].apply(ast.literal_eval)

print(df.iloc[0])


def create_mapping_and_apply(df,
                             column_name: str,
                             mapping_filename: str):
    mapping = {}
    current_id = 1

    for item_list in df[column_name]:
        for item in item_list:
            if item not in mapping:
                mapping[item] = current_id
                current_id += 1

    def map_to_id(item_list):
        return [mapping[item] for item in item_list]

    df[column_name+"Id"] = df[column_name].apply(map_to_id)

    with open(mapping_filename, 'w') as f:
        for key, value in mapping.items():
            f.write(f"{key},{value}\n")

    return df, mapping


df, category_mapping = create_mapping_and_apply(
    df, 'CategorySeq', 'category_mapping.csv')
df, press_mapping = create_mapping_and_apply(df,
                                             'PressSeq',
                                             'press_mapping.csv')
df, press_mapping = create_mapping_and_apply(df,
                                             'TitleSeq',
                                             'title_mapping.csv')

df.to_csv("data.csv")
