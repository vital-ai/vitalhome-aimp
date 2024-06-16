from setuptools import setup, find_packages

setup(
    name='vital-ai-wordnet',
    version='0.1.5',
    author='Marc Hadfield',
    author_email='marc@vital.ai',
    description='VitalSigns wordnet domain',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='https://github.com/vital-ai/vitalhome-aimp',
    packages=find_packages(),
    entry_points={
        'vitalsigns_packages': [
            'com_vitalai_domain_wordnet = com_vitalai_domain_wordnet'
        ]
    },
    package_data={
        '': ['*.pyi'],
        'com_vitalai_domain_wordnet': ['domain-ontology/*.owl']
    },
    license='Apache License 2.0',
    install_requires=[
            'vital-ai-domain>=0.1.7'
        ],
    classifiers=[
        "Programming Language :: Python :: 3.10",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.10',
)
