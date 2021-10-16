from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booksAuthors', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='notes',
            field=models.TextField(default='notes'),
            preserve_default=False,
        ),
    ]