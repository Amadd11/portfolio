<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Set; // Import Set untuk slug otomatis
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str; // Import Str untuk helper slug

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // Menggunakan Section untuk mengelompokkan field utama
                Forms\Components\Section::make('Main Details')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->lazy() // Update slug setelah user selesai mengetik
                            ->afterStateUpdated(fn(Set $set, ?string $state) => $set('slug', Str::slug($state))),

                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->disabled()
                            ->dehydrated() // Pastikan slug tetap tersimpan meskipun disabled
                            ->unique(table: 'projects', column: 'slug', ignoreRecord: true), // Validasi slug unik

                        // Menggunakan RichEditor untuk deskripsi yang lebih kaya
                        Forms\Components\RichEditor::make('description')
                            ->required()
                            ->columnSpanFull(),
                    ])->columns(2), // Layout 2 kolom untuk section ini

                Forms\Components\Section::make('Assets & Links')
                    ->schema([
                        // Menggunakan FileUpload untuk gambar
                        Forms\Components\FileUpload::make('imageUrl')
                            ->label('Project Image')
                            ->image()
                            ->multiple()
                            ->directory('projects') // Simpan di disk public
                            ->required(),

                        // Menggunakan TagsInput untuk array tags
                        Forms\Components\TagsInput::make('tags')
                            ->required(),

                        Forms\Components\TextInput::make('liveUrl')
                            ->label('Live URL')
                            ->url() // Validasi URL
                            ->maxLength(255),

                        Forms\Components\TextInput::make('githubUrl')
                            ->label('GitHub URL')
                            ->url() // Validasi URL
                            ->maxLength(255),
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                // Menampilkan gambar langsung di tabel
                Tables\Columns\ImageColumn::make('imageUrl')->label('Image'),

                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),

                // Menampilkan tags sebagai "pills"
                Tables\Columns\TextColumn::make('tags')
                    ->badge()
                    ->searchable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
