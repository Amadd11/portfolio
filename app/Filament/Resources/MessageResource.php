<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MessageResource\Pages;
use App\Models\Message;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;

class MessageResource extends Resource
{
    protected static ?string $model = Message::class;

    protected static ?string $navigationIcon = 'heroicon-o-inbox-stack';
    protected static ?int $navigationSort = 3; // Atur urutan di sidebar

    public static function form(Form $form): Form
    {
        // Form ini untuk halaman "View", dibuat read-only
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')->disabled(),
                Forms\Components\TextInput::make('email')->disabled(),
                Forms\Components\Textarea::make('message')->disabled()->columnSpanFull()->rows(10),
                Forms\Components\Placeholder::make('created_at')->label('Received On')
                    ->content(fn(Message $record): string => $record->created_at->format('d M Y \a\t H:i')),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->searchable(),
                Tables\Columns\TextColumn::make('email')->searchable(),
                Tables\Columns\TextColumn::make('message')->searchable(),

                Tables\Columns\TextColumn::make('created_at')->label('Received')
                    ->dateTime('d M Y')->sortable(),
            ])
            ->defaultSort('created_at', 'desc') // Pesan terbaru di atas
            ->actions([
                Tables\Actions\ViewAction::make(), // Mengarahkan ke halaman detail (form)
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }



    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMessages::route('/'),
            // 'create' dihapus karena pesan dibuat dari frontend, bukan admin
            'view' => Pages\ViewMessage::route('/{record}'),
            // 'edit' tidak diperlukan, kita pakai 'view'
        ];
    }
}
