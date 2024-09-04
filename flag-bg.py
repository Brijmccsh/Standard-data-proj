from PIL import Image

filled_skyline = Image.open("colorful-factory.png").convert("RGBA")
outline_skyline = Image.open("black-white-factory.png").convert("RGBA")
american_flag = Image.open("flag5.jpg").convert("RGBA")

american_flag = american_flag.resize(filled_skyline.size)

combined = Image.composite(american_flag, filled_skyline, filled_skyline)

combined.paste(outline_skyline, (0, 0), outline_skyline)

combined.save("flag6.png")

combined.show()