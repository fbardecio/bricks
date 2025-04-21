import { onRequest } from 'firebase-functions/v2/https';
import { {{name.pascalCase()}}Service } from '../services/{{name}}.service';
import { Create{{name.pascalCase()}}Dto } from '../dtos/create-{{name}}.dto';
import { Update{{name.pascalCase()}}Dto } from '../dtos/update-{{name}}.dto';

const {{name}}Service = new {{name.pascalCase()}}Service();

export const getAll{{ name.pascalCase() }}s = onRequest(async (req, res) => {
    const {{ name.camelCase()}}s = await {{name}}Service.findAll();
    res.json({{name}}s);
});

export const get{{name.pascalCase()}}ById = onRequest(async (req, res) => {
    const id = req.query.id as string;
    if (!id) return res.status(400).send('Missing {{name}} id');

    const {{name}} = await {{name}}Service.findById(id);
    if (!{{name}}) return res.status(404).send('{{name.pascalCase()}} not found');
    res.json({{name}});
});

export const create{{name.pascalCase()}} = onRequest(async (req, res) => {
    const data = req.body as Create{{name.pascalCase()}}Dto;
    const newget{{name.pascalCase()}} = await {{name}}Service.create(data);
    res.status(201).json(newget{{name.pascalCase()}});
});

export const update{{name.pascalCase()}} = onRequest(async (req, res) => {
    const id = req.query.id as string;
    const data = req.body as Update{{name.pascalCase()}}Dto;

    if (!id) return res.status(400).send('Missing {{name}} id');

    const updated = await {{name}}Service.update(id, data);
    if (!updated) return res.status(404).send('{{name.pascalCase()}} not found');
    res.json(updated);
});

export const delete{{name.pascalCase()}} = onRequest(async (req, res) => {
    const id = req.query.id as string;

    if (!id) return res.status(400).send('Missing {{name}} id');

    const success = await {{name}}Service.remove(id);
    if (!success) return res.status(404).send('{{name.pascalCase()}} not found');
    res.status(204).send();
});
