import 'package:mason/mason.dart';

void run(HookContext context) {
  String toCamelCase(String input) {
    final words = input
        .trim()
        .split(RegExp(r'\s+|_|-'))
        .where((word) => word.isNotEmpty)
        .toList();

    if (words.isEmpty) return '';

    final first = words.first.toLowerCase();
    final rest = words
        .skip(1)
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase());

    return ([first, ...rest]).join();
  }

  final updatedVars = <String, dynamic>{};

  for (final entry in context.vars.entries) {
    final key = entry.key;
    final value = entry.value;

    if (value is String) {
      updatedVars[key] = toCamelCase(value);
    } else {
      updatedVars[key] = value;
    }
  }

  context.vars = updatedVars;

  // Handle Firestore collection name prompt
  if (context.vars['add_firestore_crud'] == true) {
    final collection = context.logger.prompt(
      'What is the Firestore collection name?',
    );

    context.vars['collection_name'] = toCamelCase(collection);
    context.logger
        .info('Firestore collection name: ${context.vars['collection_name']}');
  }
}
